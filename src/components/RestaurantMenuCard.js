import { useState } from "react";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const RestaurantMenuCard = ({ resMenuData }) => {
  // console.log(resMenuData);

  const [isOpen, setIsOpen] = useState(null);

  const handleClick = (categoryId) => {
    console.log(categoryId);
    setIsOpen(isOpen === categoryId ? null : categoryId);
  };

  const categories = resMenuData.filter(
    (menu) =>
      menu?.card?.card?.["@type"]?.includes("ItemCategory") ||
      menu?.card?.card?.["@type"]?.includes("NestedItemCategory"),
  );

  // console.log(categories);

  return (
    <div className="mt-5">
      <div className="border-b-2 border-gray-700">
        {categories.map((menu) => {
          const card = menu?.card?.card;

          // console.log(card);

          const itemCards =
            card?.itemCards ||
            card?.categories?.flatMap((category) => category.itemCards);

          // console.log(itemCards);
          return (
            <div key={card?.categoryId}>
              <div
                className="flex justify-between p-5 cursor-pointer border-b border-gray-700"
                onClick={() => handleClick(card?.categoryId)}
                key={menu.card.card.categoryId}
              >
                <h1>
                  {card?.title} ({itemCards?.length || 0})
                </h1>
                <span>{isOpen === card?.categoryId ? "⬆️" : "⬇️"}</span>
              </div>
              {isOpen === card?.categoryId && (
                <>
                  {itemCards?.map((item) => (
                    <div
                      className="flex justify-between px-7 pb-6 pt-5 border-b-2 border-gray-600"
                      key={item.card.info.id}
                    >
                      <div className="w-9/12 flex flex-col items-start text-start">
                        <h1 className="text-lg font-bold">
                          {item.card.info.name}
                        </h1>

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
                      <div className="w-3/12 flex justify-end items-end ">
                        <img
                          src={CLOUDINARY_IMAGE_URL + item.card.info.imageId}
                          alt=""
                          className="w-36 h-28"
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
