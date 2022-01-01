import React from "react";

// let ReviewImages = (props) => {

class ReviewImages extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  renderImages() {
    if (this.props.images !== undefined) {
      return this.props.images.map((image) => (
        <img className="reviewImage" src={image.url} key={image.id} />
      ))
    }
  }
  render () {
    return (
      <div className="ratingimages">
        {this.renderImages()}
      </div>
    );
  }
};
export default ReviewImages;
