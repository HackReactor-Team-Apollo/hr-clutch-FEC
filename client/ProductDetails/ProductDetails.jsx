/* Author: */
//Import Library Dependencies
import React from 'react'
import {ProductGallery} from './ProductGallery.jsx'
import {onloadState, productMainInfo, skuArray, getSkuInfo, getStyleSkuInfo} from './OnLoadData.js'
import $ from 'jquery'
import axios from 'axios'
import {StarRating} from './starRatingBar.jsx'




class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productCatInfo: productMainInfo,
      productInfo: onloadState,
      currentStylePhotos: onloadState[0].style_photos,
      currentStyle: onloadState[0],
      styleSkus: [{quantity: 14, sizes: "7", sku: "1281202"}],
      currentQuantity: 1,
      currentSize: 7,
      itemsInStock: [1, 2, 3, 4],
      leftPercentage: 66,
      rightPercentage: 33
  }
  this.componentDidMount = this.componentDidMount.bind(this)
  this.componentDidUpdate = this.componentDidUpdate.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.getMetadata = this.getMetadata.bind(this)
}


componentDidMount() {
  let productID = this.props.product_id;
  let that = this;
  //get styles
  axios.get(`/products/${productID}/styles/details`, {
    params: {
      productId: productID,
    }
  })
  .then(function(response) {
    that.setState({
      productInfo: response.data,
      currentStylePhotos: response.data[0].style_photos,
      currentStyle: response.data[0],
      styleSkus: getSkuInfo(response.data)
    })
  })
  .catch(function(error) {
    console.log('ERROR FROM GET STYLES: ', error)
  })
}


componentDidUpdate(prevProps, prevState) {
  if (this.props.product_id !== prevProps.product_id || prevProps.productStyleID !== this.props.productStyleID) {
    let productID = this.props.product_id;
    let that = this;
    //get styles
    axios.get(`/products/${productID}/styles/details`, {
      params: {
        productId: productID,
      }
    })
    .then(function(response) {
      // console.log('RESPONSE DATA: ', response.data);
      that.setState({
        productInfo: response.data,
        currentStylePhotos: response.data[0].style_photos,
        currentStyle: response.data[0],
        styleSkus: getSkuInfo(response.data)
      })
      console.log('this.state.productInfo; ', that.state.productInfo)
      that.state.productInfo.forEach(style => {
        console.log("STYLEEEEEEE: ", style)
        if (that.props.productStyleID === style.style_id){
          that.setState({
            currentStylePhotos: style.style_photos,
            currentStyle: style,
            // styleSkus: getSkuInfo(style)
          })
        }
      }
      )
    })
    // .then(
    //   axios.get(`/reviews/meta?product_id=${this.props.product_id}`)
    //   .then(function (response) {
    //     that.setState({
    //       leftPercentage: response.data.ratings.avg * 20,
    //       rightPercentage: 100 - response.data.ratings.avg * 20,
    //     });
    //   })
    // )
    // .then(
    //   this.state.productInfo.forEach(style => {
    //     console.log("STYLEEEEEEE: ", style)
    //     if (this.props.productStyleID === style.style_id){
    //       that.setState({
    //         currentStylePhotos: style.style_photos,
    //         currentStyle: style,
    //         // styleSkus: getSkuInfo(style)
    //       })
    //     }
    //   }
    //   ))
    .catch(function(error) {
      console.log('ERROR FROM GET STYLES: ', error)
    })
}}


  handleChange(event) {
    let that = this;
    that.setState({currentSize: event.target.value});
  }


  getMetadata() {
    let that = this;

    axios.get(`/reviews/meta?product_id=${this.props.product_id}`)
      .then(function (response) {
        that.setState({
          leftPercentage: response.data.ratings.avg * 20,
          rightPercentage: 100 - response.data.ratings.avg * 20,
        });
      })
      .catch(function (error) {
        console.log("Metadata GET Error:", error);
      });
  }




render() {
  let skuArr = [];
  let productCategory = this.props.productCatInfo.category;
  let productName = this.props.productCatInfo.name;
  let productSlogan = this.props.productCatInfo.slogan;
  let productDescription = this.props.productCatInfo.description;
  let productFeatures = this.props.productCatInfo.features;
  let currentStylePhotos = this.state.currentStylePhotos;

  //utility variables
  let styleThumbnails = this.state.productInfo;
  let productSize = this.state.currentSize;
  let productSizeString = null;
  let removeCents = this.state.productInfo[0].style_specs.original_price.length -3;


  if (typeof productSize === "number") {
    productSizeString = JSON.stringify(productSize)
  } else {
    productSizeString = productSize
  }

  let maxQuantity = 0;
  let quantities = [];
  for (let i = 0; i < this.state.styleSkus.length; i++) {
    if (this.state.styleSkus[i].sizes === productSizeString) {
          maxQuantity = this.state.styleSkus[i].quantity
      }
  }
  for (let i = 1; i <= maxQuantity; i++) {
      quantities.push(i)
  }

  //listing functions//
  let styleThumbnailCircles = styleThumbnails.map(style => {
    let ID = style.style_id;
    return <img src={style.style_photos[0].thumbnail} onClick={() => this.props.onStyleThumbnailClick(ID)} className="selectStyle"></img>
  });

  let featuresBullets = productFeatures.map(feature => {
    return <div>&#10004;   {feature.feature}: {feature.value}</div>
  })

  let styleSizeList = this.state.styleSkus.map((sku, i) => {
    return <option value={sku.sizes}>{sku.sizes}</option>
  })
  let styleQuantityList = quantities.map((quantitySelected, i) => {
    return <option value={quantitySelected}>{quantitySelected}</option>
  })


return (
  <div className="overviewWrapper">

  <div className="overviewProductDescriptionContainer">
    <div className="overviewImageGallery">
    <ProductGallery currentStylePhotos={currentStylePhotos} productMainInfo={this.props.productCatInfo} className="overviewImageGallery" />
    </div>
    <div className="overviewInformationContainer">
      <div className="overviewReviews">
      <StarRating leftPercentage={this.state.leftPercentage} rightPercentage={this.state.rightPercentage}/>
      </div>
      <div className="overviewNameAndCat">
        <h5>{productCategory.toUpperCase()}</h5>
        <h1><strong>{productName}</strong></h1>
      </div>
      <div className="price">${this.state.productInfo[0].style_specs.original_price.slice(0, removeCents)}</div>
      <div className="overviewStyle">
        <div><strong>STYLE >  </strong> {this.state.currentStyle.style_specs.name.toUpperCase()}</div>
      <div>{styleThumbnailCircles}</div>
      </div>
      <div className="overviewSizeSelector">
      <select className="btn selectSize" onChange={this.handleChange}>
      <option value="" disabled selected hidden>SELECT SIZE</option>
  {styleSizeList}
</select>
  <select className="btn quantity">
  <option value="" disabled selected hidden>QUANTITY</option>
  {styleQuantityList}
</select>
      </div>
      <div className="overviewBagAndStar">
        <button className="btn addToBag">ADD TO BAG</button>
        <button className="btn star">STAR</button>
      </div>
    </div>
    </div>
  <div className="overviewProductDescriptionContainer">
    <div className="overviewDescriptionText">
      <h3 className="slogan">{productSlogan}</h3>
      <p className="productDescription">{productDescription}</p>
    </div>
    <div className="overviewDescriptionChecklist">
      <ul className="productFeatures">
        {featuresBullets}
      </ul>
    </div>
  </div>
  </div>
)
}
}

export {ProductDetails}