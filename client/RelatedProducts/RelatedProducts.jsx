/* Author: Kacy*/
//Import Library Dependencies
import React from 'react';
import Card from './Card.jsx';
import axios from 'axios';
import ComparisonTable from './ComparisonTable.jsx';
import AddToCompare from './AddToCompare.jsx';
import RemoveFavorite from './RemoveFavorite.jsx';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      showComparison: false,
      currentRelatedComparison: null,
      favorites: [],
    }
    this.getRelated = this.getRelated.bind(this);
    this.changeComparison = this.changeComparison.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }
  getRelated() {
    let that = this
    axios.get(`/products/${this.props.product_id}/related`)
      .then(function (response) {
        that.setState({ related: response.data })
      })
  }
  changeComparison(product) {
    this.setState({ showComparison: !this.state.showComparison })
    this.setState({ currentRelatedComparison: product })
  }
  componentDidMount() {
    this.getRelated()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.product_id !== this.props.product_id) {
      this.getRelated()
    }
  }
  addToFavorites() {
    if (!this.state.favorites.includes(this.props.product_id)) {
      this.setState({ favorites: [...this.state.favorites, this.props.product_id] })
    }
  }
  removeFromFavorites(product) {
    let newArr = [];
    for (let i = 0; i < this.state.favorites.length; i++) {
      if (this.state.favorites[i] !== product.id) {
        newArr.push(this.state.favorites[i])
      }
    }

    this.setState({ favorites: newArr });
  }

  render() {
    const { related, favorites } = this.state;


    return (
      <div className='rItemsCompare'>
        rItemsCompare
        <div className='relatedProducts'>
          Related Products
          <CarouselProvider
            visibleSlides={5}
            naturalSlideWidth={245}
            naturalSlideHeight={500}
            totalSlides={related.length}
            isIntrinsicHeight={true}
            dragEnabled={false}
          >
            <div className='carousel-container'>
              <div className='carousel-gradient'>
                <Slider>
                  {related.map((currentRelated, i) => {
                    return (
                      <Slide>
                        <Card key={i} current={currentRelated} onRelatedProductClick={this.props.onRelatedProductClick} Action={AddToCompare} changeAction={this.changeComparison} />
                      </Slide>
                    );
                  })}
                </Slider>
                {related.length > 5 &&
                  <>
                    <ButtonBack className="carousel-button-back">&lsaquo;</ButtonBack>
                    <ButtonNext className="carousel-button-next">&rsaquo;</ButtonNext>
                  </>}
              </div>
            </div>
            <div>{this.state.showComparison && <ComparisonTable currentProduct={this.props.product_id} product={this.state.currentRelatedComparison} />}</div>
          </CarouselProvider>
        </div>
        <div className='favoriteProducts'>
          Your Outfit
          <CarouselProvider
            visibleSlides={4}
            naturalSlideWidth={245}
            naturalSlideHeight={500}
            totalSlides={favorites.length}
            isIntrinsicHeight={true}
            dragEnabled={false}
          >
            <div className='carousel-container'>
              <div className='carousel-gradient'>
                <Slider>
                  <div className='circle' onClick={this.addToFavorites}>
                    <div>Add to Outfit</div>
                    <div>&#43;</div>
                  </div>
                  {favorites.map((currentFavorite, i) => {
                    return (
                      <Slide>
                        <Card key={i} current={currentFavorite} onRelatedProductClick={this.props.onRelatedProductClick} Action={RemoveFavorite} changeAction={this.removeFromFavorites} />
                      </Slide>
                    );
                  })}
                </Slider>
                {favorites.length > 4 &&
                  <>
                    <ButtonBack className="carousel-button-back">&lsaquo;</ButtonBack>
                    <ButtonNext className="carousel-button-next">&rsaquo;</ButtonNext>
                  </>}
              </div>
            </div>
          </CarouselProvider>
        </div>

      </div>

    )
  }
}
export { RelatedProducts }
