import { useEffect, useState } from "react";
import { restaurantMenu as menuData } from "./mockRestaurantMenu";

const useRestaurantMenu = () => {
  const [resData, setResData] = useState([]);
  const [resMenuData, setResMenuData] = useState([]);

  useEffect(() => {
    setResData(menuData?.data?.cards[0].card.card.info);
    setResMenuData(
      menuData?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
    );
  }, [menuData]);

  return { resData, resMenuData };
};

export default useRestaurantMenu;
