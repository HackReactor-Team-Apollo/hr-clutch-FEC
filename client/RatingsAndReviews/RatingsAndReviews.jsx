/* Author: */
//Import Library Dependencies
import React from "react";
import ReviewList from "./ReviewList.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import MoreReviewsButton from "./MoreReviewsButton.jsx";
import SortReviews from "./SortReviews.jsx";
import axios from "axios";
import ProductBreakdown from "./ProductBreakdown.jsx";
import Modal from './NewReviewModal.jsx';
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
      ratingsCount: 0,
      characteristics: {},
      sort: "relevant",
      show: false
    };
    this.onMoreReviewsClick = this.onMoreReviewsClick.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.onSortSelection = this.onSortSelection.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  getMetadata() {
    let that = this;

    axios
      .get(`/reviews/meta?product_id=${this.state.product_id}`)
      .then(function (response) {
        console.log(response.data.characteristics);
        that.setState({
          ratings: response.data.ratings,
          recommendedPercentage: response.data.recommended,
          ratingsCount: response.data.ratings.ratingsCount,
          characteristics: response.data.characteristics,
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
        `/reviews?product_id=${this.state.product_id}&count=${this.state.reviewCount}&sort=${this.state.sort}`
      )
      .then(function (response) {
        console.log("response Data:", response.data);
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
  onSortSelection(e) {
    let that = this;
    let newSort = e.target.value;

    let changeReviews = () => {
      return new Promise(function (resolve, reject) {
        that.setState({ sort: newSort }, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      });
    };
    changeReviews()
      .then(function (result) {
        that.getReviews();
      })
      .catch(function (error) {
        console.log("Change Reviews Error:", error);
      });
  }
  componentDidMount() {
    this.getMetadata();
    this.getReviews();
  }
  // componentdid update needs a LOT of work
  componentDidUpdate(prevProps) {
    if (this.state.product_id !== prevProps.product_id) {
      this.setState({ product_id: prevProps.product_id });
      this.getMetadata();
      this.getReviews();
    }
    console.log("our prev props:", prevProps);
    console.log("our state product id:", this.state.product_id);
  }
  showModal () {
    this.setState({ show: true });
  };

  hideModal() {
    this.setState({ show: false });
  };
  render() {
    return (
      <div className="rateRev">
        rateRev
        <div className="ratings">
          <RatingsBreakdown
            ratings={this.state.ratings}
            recommended={this.state.recommendedPercentage}
            ratingsCount={this.state.ratingsCount}
          />
          <ProductBreakdown characteristics={this.state.characteristics} />
        </div>
        <div className="reviews">
          reviews
          <SortReviews
            sort={this.state.sort}
            ratingsCount={this.state.ratingsCount}
            onSortSelection={this.onSortSelection}
          />
          <ReviewList reviews={this.state.reviews} getRevs={this.getReviews} />
          <MoreReviewsButton onClick={this.onMoreReviewsClick} />
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <h1>Write Your Review</h1>
            <h3></h3>
          </Modal>
          <button onClick={this.showModal}>Add A Review</button>
        </div>
      </div>
    );
  }
}
export { RatingsAndReviews };
