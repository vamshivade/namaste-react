import { CLOUDINARY_IMAGE_URL } from "../utils/constants";
import ItemsList from "./ItemsList";

const RestaurantMenuCard = ({
  resMenuData,
  itemList,
  expandItem,
  setExpandItem,
}) => {
  const handleClick = (itemId) => {
    setExpandItem(expandItem ? null : itemId);
  };

  return (
    <div className="mt-5">
      <div className="border-b-2 border-gray-700">
        <div>
          <div
            className="flex justify-between p-5 cursor-pointer border-b border-gray-700"
            onClick={() => handleClick(resMenuData?.categoryId)}
          >
            <h1>
              {resMenuData?.title} ({itemList?.length || 0})
            </h1>
            <span>{expandItem ? "⬆️" : "⬇️"}</span>
          </div>
          {expandItem && <ItemsList itemList={itemList} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
