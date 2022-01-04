/* Author: */
//Import Library Dependencies
import React from "react";
import ReviewList from "./ReviewList.jsx";
import RatingsBreakdown from "./RatingsBreakdown.jsx";
import MoreReviewsButton from "./MoreReviewsButton.jsx";
import SortReviews from "./SortReviews.jsx";
import axios from "axios";
import ProductBreakdown from "./ProductBreakdown.jsx";
import Modal from "./NewReviewModal.jsx";
import ReviewModalForm from "./ReviewModalForm.jsx";
// let RatingsAndReviews = (props) => {
//   //console.log("ratings and reviews props:", props);

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: this.props.product_id,
      currentProductInfo: {},
      reviews: [],
      reviewCount: 2,
      ratings: {},
      recommendedPercentage: 0,
      ratingsCount: 0,
      numberCount: 0,
      characteristics: {},
      sort: "relevant",

      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false,
    };
    this.onMoreReviewsClick = this.onMoreReviewsClick.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getMetadata = this.getMetadata.bind(this);
    this.onSortSelection = this.onSortSelection.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.getCurrentProductInfo = this.getCurrentProductInfo.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.showFilters = this.showFilters.bind(this);
    this.triggerRemoval = this.triggerRemoval.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }
  getCurrentProductInfo() {
    let that = this;
    axios
      .get(`/products/${this.props.product_id}`)
      .then(function (response) {
        that.setState({
          currentProductInfo: response.data,
        });
      })
      .catch(function (error) {
        console.log("Product Info GET Error:", error);
      });
  }
  getMetadata() {
    let that = this;

    axios
      .get(`/reviews/meta?product_id=${this.props.product_id}`)
      .then(function (response) {
        console.log('get meta response: ', response.data);
        that.setState({
          ratings: response.data.ratings,
          recommendedPercentage: response.data.recommended,
          ratingsCount: response.data.ratings.ratingsCount,
          characteristics: response.data.characteristics,
          numberCount: response.data.ratingCount
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
        `/reviews?product_id=${this.props.product_id}&count=${this.state.reviewCount}&sort=${this.state.sort}`
      )
      .then(function (response) {


        let filtered = that.filterReviews(response.data.results);
        that.setState({
          reviews: filtered,

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

  onClick(e) {
    let that = this;
    let value = e.target.value;
    let addFilter = () => {
      return new Promise(function (resolve, reject) {
        that.setState({ [value]: true }, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve (result);
          }
        });
      });
    };
    let removeFilter = () => {
      return new Promise(function (resolve, reject) {
        that.setState({ [value]: false }, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve (result);
          }
        });
      });
    };
    if (this.state[value] === false) {
      addFilter()
        .then(function(result) {
          that.getReviews();
        })
        .then(function(result) {
          that.showFilters();
        })
        .then(function(result) {
          that.removeButton();
        })
        .catch(function(error) {
          console.log('Add Filter Error:', error);
        });

    } else if (this.state[value] === true) {
      removeFilter()
        .then(function(result) {
          that.getReviews();
        })
        .then(function(result) {
          that.showFilters();
        })
        .then(function(result) {
          that.removeButton();
        })
        .catch(function(error) {
          console.log('Remove Filter Error:', error);
        });
    }


  }
  componentDidMount() {
    this.getMetadata();
    this.getReviews();
    this.getCurrentProductInfo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.product_id !== prevProps.product_id) {
      this.getMetadata();
      this.getReviews();
      this.getCurrentProductInfo();
      this.renderModal();
    }
  }
  filterReviews(reviewArray) {
    if(this.state.showOne === false && this.state.showTwo === false && this.state.showThree === false && this.state.showFour === false && this.state.showFive === false) {
      return reviewArray;
    }
    let filteredArray = [];
    reviewArray.forEach((review) => {
      if(this.state.showOne === true && review.rating === 1) {
        filteredArray.push(review);
      }
      if(this.state.showTwo === true && review.rating === 2) {
        filteredArray.push(review);
      }
      if(this.state.showThree === true && review.rating === 3) {
        filteredArray.push(review);
      }
      if(this.state.showFour === true && review.rating === 4) {
        filteredArray.push(review);
      }
      if(this.state.showFive === true && review.rating === 5) {
        filteredArray.push(review);
      }
    });
    return filteredArray;

  }
  showFilters () {
    if (this.state.showOne !== false || this.state.showTwo !== false || this.state.showThree !== false || this.state.showFour !== false || this.state.showFive !== false) {
      let showingArr = ['showOne', 'showTwo', 'showThree', 'showFour', 'showFive'];
     return showingArr.map((shownumber, i) => {
        if (this.state[shownumber] === true) {
         return ( <span style={{fontSize: 'small'}}>| {i + 1} |</span> )
        }
      })
    }
  }
  removeButton() {
    if (this.state.showOne !== false || this.state.showTwo !== false || this.state.showThree !== false || this.state.showFour !== false || this.state.showFive !== false) {
      return (
        <button className="removeFilters" onClick={this.triggerRemoval}>Remove Filters</button>
      )
    }
  }
  triggerRemoval() {
    let that = this;
    let showingObj = {
      showOne: false,
      showTwo: false,
      showThree: false,
      showFour: false,
      showFive: false
    }
    let removeAllFilters = () => {
      return new Promise(function (resolve, reject) {
        that.setState(showingObj, function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve (result);
          }
        });
      });
    };
    removeAllFilters()
        .then(function(result) {
          that.getReviews();
        })
        .then(function (result) {
          that.showFilters();
        })
        .catch(function(error) {
          console.log('Remove All Filters Error:', error);
        });
  }
  showModal() {
    this.setState({ show: true });
  }
  renderModal() {
    return (
      <Modal product_id={this.state.product_id} show={this.state.show} handleClose={this.hideModal}>
              <h2>Write Your Review</h2>
              <div>About the <span style={{ textDecoration: 'underline' }}>{this.state.currentProductInfo.name}</span></div>
              <ReviewModalForm
                characteristics={this.state.characteristics}
                product_id={this.props.product_id}
              />
      </Modal>
    )
  }
  hideModal() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div className="rateRev">
        <br></br>
        <h2>Ratings & Reviews</h2>
        <br></br>
        <div className="ratings">
          <RatingsBreakdown
            ratings={this.state.ratings}
            recommended={this.state.recommendedPercentage}
            ratingsCount={this.state.ratingsCount}
            getReviews={this.getReviews}
            oneratingCount={this.state.numberCount['1']}
            tworatingCount={this.state.numberCount['2']}
            threeratingCount={this.state.numberCount['3']}
            fourratingCount={this.state.numberCount['4']}
            fiveratingCount={this.state.numberCount['5']}

            click={this.onClick}
          />
          <span  style={{fontSize: 'small'}}>Filters Applied: </span>{this.showFilters()}
          <br></br>
          {this.removeButton()}
          <ProductBreakdown characteristics={this.state.characteristics} />
        </div>
        <div className="reviews">

          <SortReviews
            sort={this.state.sort}
            ratingsCount={this.state.ratingsCount}
            onSortSelection={this.onSortSelection}
          />
          <br></br>
          <div className="reviewlist">
            <ReviewList reviews={this.state.reviews} getRevs={this.getReviews} />
          </div>
          <div className="reviewlistbuttons">
            <MoreReviewsButton onClick={this.onMoreReviewsClick} />
            {this.renderModal()}
            <button className="ReviewsButtons" onClick={this.showModal}>
              Add A Review &#43;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export { RatingsAndReviews };
