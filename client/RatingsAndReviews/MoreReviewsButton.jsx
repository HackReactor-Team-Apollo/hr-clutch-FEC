import React from 'react';

let MoreReviewsButton = (props) => {
  return (

    <button className="ReviewsButtons" onClick={() => {props.onClick();}}>More Reviews</button>
  );
}
export default MoreReviewsButton;