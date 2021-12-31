/* Author: */
//Import Library Dependencies
import React from 'react'
import $ from 'jquery'
import axios from 'axios'
import ReactDOM from 'react-dom'

//Import Modules
import { ProductDetails } from "./ProductDetails/ProductDetails.jsx";
import { RelatedProducts } from "./RelatedProducts/RelatedProducts.jsx";
import { QuestionsAndAnswers } from "./QuestionsAndAnswers/QuestionsAndAnswersMainWrapper.jsx";
import { RatingsAndReviews } from "./RatingsAndReviews/RatingsAndReviews.jsx";
import { ProductGallery } from "./ProductDetails/ProductGallery.jsx";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

      product_id: 37316, //DUMMY VALUE, gets passed to all components

    }
    this.onRelatedProductClick = this.onRelatedProductClick.bind(this)
  }
  onRelatedProductClick (current) {
    this.setState({product_id: current})
  }
  componentDidMount() {
    this.onRelatedProductClick
  }
  render () {
    return (
      <div id='App' className='App'>
        <div className='container'>
          <div className='header'>header</div>
          <div className='banner'>banner</div>
          <div className='wrapper'>
            <ProductDetails product_id={this.state.product_id} />
            <RelatedProducts product_id={this.state.product_id} onRelatedProductClick={this.onRelatedProductClick}/>
            <QuestionsAndAnswers product_id={this.state.product_id} />
            <RatingsAndReviews
              product_id={this.state.product_id}
            />
          </div>
          <div className='footer'>footer</div>
        </div>
      </div>
    )
  }
}
export { App }
