import React from "react";
import ReviewImages from "./ReviewImages.jsx";
import axios from "axios";
// import StarRatings from 'react-star-ratings';
import StarRating from './StarRatingBar.jsx';

// {/* <StarRatings
//         rating={Number(this.props.review.rating)}
//         starDimension="15px"
//         starSpacing="5px"
//       /> */}
class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_id: this.props.review.review_id,
      marked: false
    };
    this.renderOverallRating=this.renderOverallRating.bind(this);
  }
  convertTime(milliseconds) {
    let date = new Date(milliseconds);
    let modifiedDate = date.toString().split(" ");
    modifiedDate.shift();
    modifiedDate.splice(2, 0, ", ");
    modifiedDate.splice(4, 5);
    modifiedDate.splice(1, 0, " ");
    modifiedDate.join("");

    return modifiedDate;
  }
  isRecommended(review) {
    if (review.recommend) {
      return <div className="ratingrecommend">&#10004; I recommend this product</div>;
    }
  }
  showResponse(review) {
    if (review.response !== null) {
      return (
      <div className="ratingresponse">Response from seller:
        <div className="ratingresponsetext">{this.props.review.response}</div>
      </div>
      );
    }
  }
  markHelpful() {
    let that = this;
    if (this.state.marked === false) {
      axios.put("/reviews/:reviewId/helpful", {review_id: this.state.review_id})
        .then(function(response) {
          //console.log('this worked:', response);
          that.setState({marked: true})
          that.props.getRevs();
        })
        .catch(function(error) {
          console.log('PUT Error:', error);
        })
    }
  }
  reportReview() {
    let that = this;
    axios.put("/reviews/:reviewId/report", {review_id: this.state.review_id})
      .then(function(response) {
        //console.log('this worked:', response);
        that.props.getRevs();
      })
      .catch(function(error) {
        console.log('PUT Error:', error);
      })
  }
  renderOverallRating () {
    if(this.props.review.rating !== undefined) {
      let leftPercentage = (this.props.review.rating / 5) * 100;
      let rightPercentage = 100 - leftPercentage;
      return (
        <>
          <StarRating currentRating={this.props.review.rating} leftPercentage={leftPercentage} rightPercentage={rightPercentage} />
        </>
      )
    }
  }
  render() {
    return (
      <>
        <div className="reviewtile" key={this.props.review.review_id}>
          <div className="reviewrating">{this.renderOverallRating()}</div>
          <div className="ratinguser">{this.props.review.reviewer_name},</div>
          <div className="ratingdate">
            {this.convertTime(Date.parse(this.props.review.date))}
          </div>
          <div className="ratingsummary">{this.props.review.summary}</div>
          <div className="ratingbody">{this.props.review.body}</div>
          {this.isRecommended(this.props.review)}
          <div className="helpfuldiv"><span className="helpfulspan">Helpful?</span>
          <div onClick={this.markHelpful.bind(this)} className="helpfulReview">Yes({this.props.review.helpfulness})</div>
          </div>
          <div onClick={this.reportReview.bind(this)} className="reportReview">Report</div>
          {this.showResponse(this.props.review)}
          <ReviewImages images={this.props.review.photos} />
        </div>
      </>
    );
  }
}
export default ReviewTile;
