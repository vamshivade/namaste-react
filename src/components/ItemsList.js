import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemsList = ({ itemList, isCartPage = false }) => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    // console.log(item);
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  return (
    <>
      {itemList?.map((item) => {
        return (
          <div
            className="flex justify-between px-7 pb-6 pt-5 border-b-2 border-gray-600"
            key={item.card.info.id}
          >
            <div className="w-9/12 flex flex-col items-start text-start">
              <h1 className="text-lg font-bold">{item.card.info.name}</h1>

              <h3 className="font-semibold text-orange-400">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </h3>

              <p className="text-sm text-green-400">
                ⭐ {item.card.info.ratings?.aggregatedRating?.rating}
              </p>

              <p className="text-sm text-gray-300 mt-2">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-3/12 flex justify-end items-center ">
              <div className="flex justify-evenly items-center flex-col gap-3">
                <img
                  src={CLOUDINARY_IMAGE_URL + item.card.info.imageId}
                  alt=""
                  className="w-36 h-28"
                />

                {isCartPage ? (
                  <button
                    className="p-1 px-6 font-bold rounded-md w-full bg-orange-500"
                    onClick={() => handleRemove(item)}
                  >
                    Remove -
                  </button>
                ) : (
                  <button
                    className="p-1 px-6 font-bold rounded-md w-full bg-orange-500"
                    onClick={() => handleAdd(item)}
                  >
                    Add +
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemsList;
