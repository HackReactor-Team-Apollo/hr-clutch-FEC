import React from "react";
import ReviewImages from "./ReviewImages.jsx";
import axios from "axios";
class ReviewTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review_id: this.props.review.review_id,
    };
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
      return <div>I recommend this product</div>;
    }
  }
  showResponse(review) {
    if (review.response !== null) {
      return  <div>Response:{this.props.review.response}</div>;
    }
  }
  markHelpful() {
    let that = this;
    axios.put("/reviews/:reviewId/helpful", {review_id: this.state.review_id})
      .then(function(response) {
        console.log('this worked:', response);
        that.props.getRevs();
      })
      .catch(function(error) {
        console.log('PUT Error:', error);
      })
  }
  reportReview() {
    let that = this;
    axios.put("/reviews/:reviewId/report", {review_id: this.state.review_id})
      .then(function(response) {
        console.log('this worked:', response);
        that.props.getRevs();
      })
      .catch(function(error) {
        console.log('PUT Error:', error);
      })
  }
  render() {
    return (
      <>
        <div key={this.props.review.review_id}>
          <div>Star Rating: {this.props.review.rating}</div>
          <div>User: {this.props.review.reviewer_name}</div>
          <div>
            Date: {this.convertTime(Date.parse(this.props.review.date))}
          </div>
          <div>Summary: {this.props.review.summary}</div>
          <div>Body: {this.props.review.body}</div>
          {this.isRecommended(this.props.review)}
          <div>Helpful?</div>
          <div onClick={this.markHelpful.bind(this)} className="helpfulReview">Yes({this.props.review.helpfulness})</div>
          <div onClick={this.reportReview.bind(this)} className="reportReview">Report</div>
          {this.showResponse(this.props.review)}
          <ReviewImages images={this.props.review.photos} />
        </div>
      </>
    );
  }
}
export default ReviewTile;
