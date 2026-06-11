import ItemsList from "../components/ItemsList";
import { useSelector, useDispatch } from "react-redux";
import { clearStore } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  return (
    <div className="mx-auto w-9/12">
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            if (cartItems.length > 0) {
              dispatch(clearStore());
            } else {
              navigate("/");
            }
          }}
          className=" border rounded-md border-orange-300 px-3 p-1 bg-orange-500 font-bold  flex justify-end"
        >
          {cartItems.length > 0 ? "Remove All" : "Add Items"}
        </button>
      </div>
      {cartItems.length === 0 && (
        <p className="p-3 text-center">Cart is Empty. Add Items to purchase.</p>
      )}

      <ItemsList itemList={cartItems} isCartPage={true} />
    </div>
  );
};

export default Cart;
