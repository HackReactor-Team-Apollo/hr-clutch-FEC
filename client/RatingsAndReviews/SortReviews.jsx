import React from "react";

let SortReviews = (props) => {
  return (
    <div className="sortedDiv">
      <div id="sorted">sorted by</div>
      <select className="sorterdropdown" value={props.sort} onChange={props.onSortSelection}>
        <option>relevant</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </select>

    </div>
  );
};

export default SortReviews;
