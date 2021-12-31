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
        <button name ="onereviews" value="showOne" onClick={this.props.click}>1:</button>
        <div>{this.props.ratings["1"]}%</div>
        <button name ="tworeviews" value="showTwo" onClick={this.props.click}>2:</button>
        <div>{this.props.ratings["2"]}%</div>
        <button name ="threereviews" value="showThree" onClick={this.props.click}>3:</button>
        <div>{this.props.ratings["3"]}%</div>
        <button name ="fourreviews" value="showFour" onClick={this.props.click}>4:</button>
        <div>{this.props.ratings["4"]}%</div>
        <button name ="fivereviews" value="showFive" onClick={this.props.click}>5:</button>
        <div>{this.props.ratings["5"]}%</div>
      </>
    );
  }
}

export default RatingsBreakdown;
