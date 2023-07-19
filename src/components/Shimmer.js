import React from "react";

function Shimmer() {
  return (
    <div className="main">
      <div className="shimmerSearchBar"></div>
      <hr></hr>
      <div className="shimmerUI">
        {Array(15)
          .fill("")
          .map((e, i) => (
            <div key={i} className="shimmer-card"></div>
          ))}
      </div>
    </div>
  );
}
export default Shimmer;
