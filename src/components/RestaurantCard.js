import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  // console.log(restaurantData);

  const {
    resImg = restaurantData?.cloudinaryImageId,
    resName = restaurantData?.name,
    rating = restaurantData?.avgRating,
    delTime = restaurantData?.sla?.slaString,
    cuisine = restaurantData?.cuisines.join(", "),
    location = restaurantData?.areaName,
    resCostForTwo = restaurantData?.costForTwo,
  } = restaurantData;

  return (
    <div className="card relative">
      <div className="food-image">
        <img src={CLOUDINARY_IMAGE_URL + resImg} alt="resImage" />
      </div>

      <div className="res-details">
        <h3>{resName}</h3>
        <h4>{resCostForTwo}</h4>
        <p>
          ⭐ {rating} • {delTime}
        </p>
        <p className="cuisine">{cuisine}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export const withPromotedlabel = (WrappedComponent) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 z-10 bg-green-500 text-white px-3 py-1 rounded-md font-bold">
          Best Choice
        </label>

        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
