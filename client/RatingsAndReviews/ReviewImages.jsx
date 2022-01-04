import React from "react";
import ImageModal from "./ImageModal.jsx";
import LoadModalImage from "./LoadModalImage.jsx";

// let ReviewImages = (props) => {

class ReviewImages extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    this.renderImages = this.renderImages.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  showModal() {
    this.setState({ show: true });
  }
  hideModal() {
    this.setState({ show: false });
  }
  renderImages() {
    if (this.props.images !== undefined) {
      return this.props.images.map((image, i) => (
        <div className="ratingimages" style={{ gridColumn: i + 1 }}>
          <ImageModal image={image.url} show={this.state.show} handleClose={this.hideModal}>
            <LoadModalImage image={image.url} />
          </ImageModal>
          <img className="reviewImage" src={image.url} key={image.id}  onClick={this.showModal}/>


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
