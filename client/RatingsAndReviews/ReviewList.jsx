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



// renderReviewTiles() {
//   let that = this;
//   if (this.props.reviews !== undefined) {

//     let createReviewTiles = () => {
//         return new Promise(function (resolve, reject) {
//         that.setState({reviews: that.props.reviews}, function (error, result) {
//           if (error) {
//             reject(error);
//           } else {
//             resolve (result);
//           }
//         });
//       });

//     }
//     createReviewTiles()
//       .then(function (response) {
//         return that.state.reviews.map((review) => (
//           <ReviewTile review={review} getRevs={that.props.getRevs}/>
//         ))
//       })
//       .catch(function (error) {
//         console.log("render review tiles error:", error);
//       })
//   }

// }
// componentDidUpdate(prevProps) {
//   if(this.props !== undefined && prevProps !== undefined) {

//     if (this.props.reviews !== prevProps.reviews) {
//       this.renderReviewTiles();
//     }
//   }
// }