import { useEffect, useState } from "react";
import RestauarantCard from "./RestauarantCard";
// import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.997668&lng=80.0972003&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const jsonData = await data.json();
      setListOfRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilterRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  return listOfRestaurants.length === 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} />

          <button
            onClick={() => {
              //Filter the restaurant list based on search input
              // SearchText
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              setFilterRestaurants(filteredList);
            }}
          >Search</button>
        </div>

        <div className="top-rated">
          <button
            className="filterbtn"
            onClick={() => {
              const topRatedFilteredList = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating > 4.5;
              })
              setFilterRestaurants(topRatedFilteredList);
            }}
          >Top Rated Restaurants</button>
        </div>
      </div>

      <div className="res-container">
        {/* //RestuarantCard */}

        {
          filterRestaurants.map((restuarant) => (
            <Link to={"/restaurants/" + restuarant?.info.id} key={restuarant?.info.id}>
              <RestauarantCard resData={restuarant?.info} />
            </Link>
          ))
        }

      </div>

    </div>
  );
}

export default Body;


