import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { restaurantMenu } from "../utils/mockRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";
import RestaurantMenuAccordin from "./RestaurantMenuAccordin";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const { resData, resMenuData } = useRestaurantMenu();

  useEffect(() => {
    // console.log(resData);
    // console.log(resMenuData);
  }, [resData, resMenuData]);

  return (
    <div className=" text-center w-9/12 m-auto">
      <RestaurantMenuAccordin resData={resData} />
      <RestaurantMenuCard resMenuData={resMenuData} />
    </div>
  );
};

export default RestaurantMenu;
