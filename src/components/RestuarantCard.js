import { CDN_URL } from "../utils/constants";

const RestuarantCard = ({ resData }) => {
  // For Swiggy-style data, restaurant info is inside `info`
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwoString,
    deliveryTime
  } = resData?.info || {};

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name || "Restaurant"}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>Rating: {avgRating} ⭐</h4>
      <h4>{costForTwoString}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestuarantCard;
