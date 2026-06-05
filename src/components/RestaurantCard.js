const RestaurantCard = (props) => {
  const { resImg, resName, rating, delTime, cuisine, location, resCostForTwo } =
    props;
  return (
    <div className="card">
      <div className="food-image">
        <img src={resImg} alt="resImage" />
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

export default RestaurantCard;
