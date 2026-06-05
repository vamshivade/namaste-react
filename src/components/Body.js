import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");

  const fetchRestaurantData = async () => {
    setLoading(true);
    const data = await fetch(RES_URL);

    const jsonData = await data.json();
    setResData(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setAllRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="top-container">
        <h2 className="body-label">
          Restaurants with online food delivery in Hyderabad
        </h2>
        <div className="search-div">
          <input
            placeholder="Enter name to search ..."
            className="search-input"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredText = allRestaurants.filter((res) =>
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()),
              );
              setResData(filteredText);
            }}
          >
            Search
          </button>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = allRestaurants.filter(
                (res) => res.info.avgRating > 4.2,
              );
              setResData(filteredRes);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="search-btn"
            onClick={() => {
              setResData(allRestaurants);
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="card-container">
        {resData.length === 0 ? (
          <h2 className="body-label"> No Restaurants Found</h2>
        ) : (
          resData.map((res) => (
            <RestaurantCard
              key={res?.info?.id}
              resName={res?.info?.name}
              resCostForTwo={res?.info?.costForTwo}
              resImg={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                res?.info?.cloudinaryImageId
              }
              rating={res?.info?.avgRating}
              delTime={res?.info?.sla?.slaString}
              cuisine={res?.info?.cuisines.join(", ")}
              location={res?.info?.areaName}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
