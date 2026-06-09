import { useState } from "react";
import RestaurantCard, { withPromotedlabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedlabel(RestaurantCard);

  const {
    restaurants: resData,
    allRestaurants,
    loading,
    setRestaurants: setResData,
    setAllRestaurants,
    setLoading,
  } = useRestaurant();

  const { isOnline } = useOnline();

  // if(isOnline ? )

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
            <Link
              to={`/restaurant/${res?.info?.id}`}
              key={res?.info?.id}
              onClick={() => console.log(res?.info?.id)}
            >
              {res?.info?.avgRating >= 4.2 ? (
                <RestaurantCardPromoted restaurantData={res?.info} />
              ) : (
                <RestaurantCard restaurantData={res?.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
