import React from 'react'
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';



class ProductGallery extends React.Component {
  render() {
    let currentImages = this.props.currentStylePhotos;
    return <ImageGallery
    items={currentImages}
    thumbnailPosition="left"
    showPlayButton={false}
    lazyLoad={true}
    />;
  }
}

export {ProductGallery};