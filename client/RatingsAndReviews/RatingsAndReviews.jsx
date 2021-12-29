/* Author: */
//Import Library Dependencies
import React from "react";
import ReviewList from "./ReviewList.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import MoreReviewsButton from "./MoreReviewsButton.jsx";
import axios from "axios";
// let RatingsAndReviews = (props) => {
//   //console.log("ratings and reviews props:", props);

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product_id,
      reviews: [],
      reviewCount: 2,
      ratings: {},
      recommendedPercentage: 0,
      ratingsCount: 0
    };
    this.onMoreReviewsClick = this.onMoreReviewsClick.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }
  getMetadata() {
    let that = this;

    axios
      .get(`/reviews/meta?product_id=${this.state.product_id}`)
      .then(function (response) {
        that.setState({
          ratings: response.data.ratings,
          recommendedPercentage: response.data.recommended,
          ratingsCount: response.data.ratings.ratingsCount
        });
      })
      .catch(function (error) {
        console.log("Metadata GET Error:", error);
      });
  }
  getReviews() {
    let that = this;
    axios
      .get(
        `/reviews?product_id=${this.state.product_id}&count=${this.state.reviewCount}&sort=relevant`
      )
      .then(function (response) {
        //console.log("response Data:", response.data.results);
        that.setState({
          reviews: response.data.results,
        });
      })
      .catch(function (error) {
        console.log("Reviews GET Error:", error);
      });
  }
  onMoreReviewsClick(callback) {
    let that = this;

    let newCount = this.state.reviewCount + 2;

    let addReviews = () => {
      return new Promise(function (resolve, reject) {
        that.setState({ reviewCount: newCount }, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
    addReviews()
      .then(function (result) {
        that.getReviews();
      })
      .catch(function (error) {
        console.log("More Reviews Error:", error);
      });
  }

  componentDidMount() {
    this.getMetadata();
    this.getReviews();
  }
  render() {
    return (
      <div className="rateRev">
        rateRev
        <div className="ratings">
          <RatingsBreakdown
            ratings={this.state.ratings}
            recommended={this.state.recommendedPercentage} ratingsCount={this.state.ratingsCount}
          />
        </div>
        <div className="reviews">
          reviews
          <ReviewList reviews={this.state.reviews} />
          <MoreReviewsButton onClick={this.onMoreReviewsClick} />
        </div>
      </div>
    );
  }
}
export { RatingsAndReviews };
