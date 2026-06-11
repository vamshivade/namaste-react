import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";
import RestaurantMenuAccordin from "./RestaurantMenuAccordin";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import About from "./About";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const { resData, resMenuData } = useRestaurantMenu();

  const [expandItem, setExpandItem] = useState(null);

  useEffect(() => {}, [resData, resMenuData]);

  const filteredMenu = resMenuData.filter(
    (res) =>
      res.card.card?.["@type"].includes("ItemCategory") ||
      res.card.card?.["@type"].includes("NestedItemCategory"),
  );

  return (
    <div className=" text-center w-9/12 m-auto">
      <RestaurantMenuAccordin resData={resData} />
      
      {filteredMenu.map((item) => {
        const dataList = item?.card?.card;

        const itemList =
          dataList?.itemCards ||
          dataList?.categories?.flatMap((i) => i.itemCards);

        return (
          <RestaurantMenuCard
            key={dataList?.categoryId}
            resMenuData={dataList}
            itemList={itemList}
            expandItem={expandItem === dataList?.categoryId}
            setExpandItem={setExpandItem}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
