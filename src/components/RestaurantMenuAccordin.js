import { CLOUDINARY_IMAGE_URL } from "../utils/constants";

const RestaurantMenuAccordin = ({ resData }) => {
//   console.log(resData);
  return (
    <div className="border border-gray-600 rounded-lg p-3 flex justify-between">
      <div className="flex flex-col items-start px-5">
        <h1>{resData?.name}</h1>
        <p>
          {resData?.avgRatingString} ({resData?.totalRatingsString})
        </p>
        <p>{resData?.costForTwoMessage}</p>
        <p>{resData?.cuisines?.join(", ")}</p>
        <p>
          {resData?.locality} {resData?.city}
        </p>
      </div>
    </div>
  );
};

export default RestaurantMenuAccordin;
