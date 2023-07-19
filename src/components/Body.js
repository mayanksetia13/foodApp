import React, { useEffect } from "react";
// import { restaurantListData } from "../data/data";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [resData, setResData] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.70584892752884&lng=77.15483698993921&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await res.json();
    setResData(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRes(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function filterHandler(searchText, resData) {
    const data = resData.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return data;
  }

  function clearSearch() {
    setSearchText("");
  }

  // not render component/early return
  if (!resData) return null;

  return filteredRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main">
      <div className="searchBar">
        <div className="searchBar-input">
          <label for="search"></label>
          <input
            type="search"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterHandler(searchText, resData);
            setFilteredRes(data);
            setSearchText("");
          }}
        >
          <i class="fa-solid fa-magnifying-glass"></i> Search
        </button>
      </div>
      <hr></hr>
      <div className="card-body">
        {filteredRes.map((res) => {
          return <RestaurantCard key={res.data.id} {...res.data} />;
        })}
      </div>
    </div>
  );
}

export default Body;
