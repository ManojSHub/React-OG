import { useState } from "react";
import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData.js";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filterbtn"
          onClick={() => {
            const filterList = listOfRestaurants.data.cards.filter(res => parseFloat(res.info.avgRating) > 4.5);
            // setListOfRestaurants(filterList);
            setListOfRestaurants({
              ...listOfRestaurants,
              data: { ...listOfRestaurants.data, cards: filterList }
            });
          }}
        >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {/* //RestuarantCard */}
        {listOfRestaurants.data.cards.map((restaurant) => (
          <RestuarantCard
            key={restaurant.info?.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;