import React from "react";
import ImageComponent from './ImagePopUpComponent.jsx';

// let ReviewImages = (props) => {

class ReviewImages extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
    this.renderImages = this.renderImages.bind(this);
  }
  renderImages() {
    if (this.props.images !== undefined) {
      return this.props.images.map((image, i) => (
        <div className="ratingimages" style={{ gridColumn: i + 1 }}>
          <img className="reviewImage" src={image.url} key={image.id} />
        </div>

      ))
    }
  }
  // <ImageComponent src={image.url} key={image.id} column={i + 1}/>
  render () {
    return (
      <>
        {this.renderImages()}
      </>

    );
  }
};
export default ReviewImages;
