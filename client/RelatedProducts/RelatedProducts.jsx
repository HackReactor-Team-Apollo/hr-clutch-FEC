/* Author: Kacy*/
//Import Library Dependencies
import React from 'react'
import Card from './Card.jsx'
import axios from 'axios';
import ComparisonTable from './ComparisonTable.jsx'
import AddToCompare from './AddToCompare.jsx';
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
      currentRelatedComparison: null
    }
    this.getRelated = this.getRelated.bind(this);
    this.changeComparison = this.changeComparison.bind(this);
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

  render() {
    const {related} = this.state;


    return (
      <div className='rItemsCompare'>
        rItemsCompare
        <div className='relatedProducts'>
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
                      <Card key={i} current={currentRelated} onRelatedProductClick={this.props.onRelatedProductClick} Action={AddToCompare} changeComparison={this.changeComparison} />
                    </Slide>
                  );
                })}
              </Slider>
              {related.length > 5 &&
              <>
                <ButtonBack className="carousel-button-back">&lsaquo;</ButtonBack>
                <ButtonNext className="carousel-button-next">&rsaquo;</ButtonNext>
                {/* <DotGroup className="carousel-dots" /> */}
              </>}
            </div>
          </div>
          </CarouselProvider>

          <div>{this.state.showComparison && <ComparisonTable currentProduct={this.props.product_id} product={this.state.currentRelatedComparison} />}</div>
        </div>
        <div className='favoriteProducts'>
          Favorited
        </div>
      </div>

    )
  }
}
export { RelatedProducts }
