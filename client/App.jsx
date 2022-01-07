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
import { productMainInfo } from "./ProductDetails/OnLoadData.js";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

      product_id: 37316, //DUMMY VALUE, gets passed to all components
      product_styleID: 221027,
      productCatInfo: productMainInfo
    }
    this.onRelatedProductClick = this.onRelatedProductClick.bind(this)
    this.onStyleThumbnailClick = this.onStyleThumbnailClick.bind(this)
  }
  onRelatedProductClick (current) {
    this.setState({product_id: current})
  }
  onStyleThumbnailClick (current) {
    this.setState({product_styleID: current})
  }
  componentDidMount() {
    this.onRelatedProductClick
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.product_id !== prevState.product_id) {
      let productID = this.state.product_id;
      let that = this;
      //get styles
      axios.get(`/products/${productID}`, {
        params: {
          productId: productID,
        }
      })
      .then(function(response) {
        // console.log('RESPONSE DATA: ', response.data)
        that.setState({
          productCatInfo: response.data
        })
      })
      .catch(function(error) {
        console.log('ERROR FROM GET STYLES: ', error)
      })
    }
  }


  render () {
    return (
      <div id='App' className='App'>
        <div className='container'>
          <div className='header'> <img src="https://see.fontimg.com/api/renderfont4/3z8d8/eyJyIjoiZnMiLCJoIjo0NywidyI6MTAwMCwiZnMiOjQ3LCJmZ2MiOiIjRkFGOEY4IiwiYmdjIjoiIzBFMDAwMCIsInQiOjF9/Q2x1dGNo/rooster-personal-use.png" alt="Cursive fonts"></img>


          <div className='searchWrapper'>
          <button className='QASearchButton' type='submit'>

          </button>
          <input type='text' className='searchMain' />

          <button className='QASearchClear' type='reset'>
          </button>
            <i className="fas fa-search"></i>
        </div>

          </div>
          <div className='banner'>
          <marquee style={{ color: 'red', fontSize: '1em' }}>  <strong>Members only sale</strong><i> - Sign up now to receive exclusive deals!</i>  </marquee>
            </div>
          <div className='wrapper'>
            <ProductDetails product_id={this.state.product_id} productStyleID={this.state.product_styleID} onStyleThumbnailClick={this.onStyleThumbnailClick} productCatInfo={this.state.productCatInfo}/>
            <RelatedProducts product_id={this.state.product_id} onRelatedProductClick={this.onRelatedProductClick}/>
            <QuestionsAndAnswers product_id={this.state.product_id} />
            <RatingsAndReviews
              product_id={this.state.product_id}
            />
          </div>
          <div className='footer'>
             <div><img src="https://see.fontimg.com/api/renderfont4/3z8d8/eyJyIjoiZnMiLCJoIjoyNCwidyI6MTAwMCwiZnMiOjI0LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/Qw/rooster-personal-use.png" alt="Cursive fonts"></img></div>
             <div>&copy; <i>Kacy Holm - Winston Pantelakos - Haydenn Harper - Ian McGahren </i></div></div>
        </div>
      </div>
    )
  }
}
export { App }
