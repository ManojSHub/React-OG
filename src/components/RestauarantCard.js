import { CDN_URL } from "../utils/constants";

const RestauarantCard = (props) => {
  // For Swiggy-style data, restaurant info is inside `info`
  const { resData } = props;
  // console.log(resData);

  // needs for designing card
  //cloudinaryImageId
  //name
  //avgRating
  //cuisines
  //costForTwo
  //sla.deliveryTime

  const {
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    locality,
    areaName,
    availability
  } = resData;

  // console.log(cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla);

  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
        className="res-img"
      />
      <div className="res-card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        {/* <p>{aggregatedDiscountInfoV3}</p> */}
        <h4>{avgRating} ⭐</h4>
        <h4>{costForTwo} 💰</h4>
        <h4>{sla.deliveryTime} min</h4>
        <p>{locality}, {areaName}</p>
        <p>{availability.opened ? "Open" : "Closed"}</p>
      </div>
    </div>
  );
};

export default RestauarantCard;
