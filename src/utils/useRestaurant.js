import { useEffect, useState } from "react";
import { RES_URL } from "./constants";
import { restaurantsList } from "./mockRestaurantsList";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRestaurantData = async () => {
    setLoading(true);
    const data = restaurantsList;

    // console.log(data);

    setRestaurants(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setAllRestaurants(
      data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return {
    restaurants,
    allRestaurants,
    loading,
    setRestaurants,
    setAllRestaurants,
    setLoading,
  };
};

export default useRestaurant;
