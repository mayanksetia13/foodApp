import React from "react";
import { RES_CLOUD_IMGLINK } from "../utils/config";

function RestaurantCard({ name, area, costForTwoString, cloudinaryImageId }) {
  return (
    <div className="card">
      <img
        className="card-img"
        src={RES_CLOUD_IMGLINK + cloudinaryImageId}
        alt={name}
      />
      <h4 className="card-heading">{name}</h4>
      <p className="card-locality">{area}</p>
      <span className="card-price">INR : {costForTwoString}</span>
    </div>
  );
}

export default RestaurantCard;
