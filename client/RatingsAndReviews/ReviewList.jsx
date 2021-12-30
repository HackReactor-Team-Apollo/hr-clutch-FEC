import React from "react";
import ReviewTile from "./ReviewTile.jsx";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {this.props.reviews.map((review) => (
          <ReviewTile review={review} getRevs={this.props.getRevs}/>
        ))}
      </>
    );
  }
}
export default ReviewList;
