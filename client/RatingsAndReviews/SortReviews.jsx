import React from "react";

let SortReviews = (props) => {
  return (
    <div>
      <div>sorted by</div>
      <select value={props.sort} onChange={props.onSortSelection}>
        <option>relevant</option>
        <option value="newest">newest</option>
        <option value="helpful">helpful</option>
      </select>
    </div>
  );
};

export default SortReviews;
