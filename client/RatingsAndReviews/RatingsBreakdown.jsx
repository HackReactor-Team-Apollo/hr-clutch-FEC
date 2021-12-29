import React from "react";

class RatingsBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>Star Ratings</div>
        <div>{this.props.ratings.avg}</div>
        <div>{this.props.recommended}% of {this.props.ratingsCount} reviews recommend this product</div>
        <div>Rating Breakdown</div>
        <div>1: {this.props.ratings["1"]}%</div>
        <div>2: {this.props.ratings["2"]}%</div>
        <div>3: {this.props.ratings["3"]}%</div>
        <div>4: {this.props.ratings["4"]}%</div>
        <div>5: {this.props.ratings["5"]}%</div>
      </>
    );
  }
}

export default RatingsBreakdown;
