/* Author: */
//Import Library Dependencies
import React from 'react'
import {ProductGallery} from './ProductGallery.jsx'
import {onloadState, productMainInfo, skuArray, getSkuInfo} from './OnLoadData.js'
import $ from 'jquery'
import axios from 'axios'


// let sizeToQuantity = function(currentSize) {
//   let that = this;
//   let maxQuantity = 0;
//   let quantities = [];
//   for (let i = 0; i < that.state.styleSkus.length; i++) {
//       if (that.state.styleSkus[i].size === currentSize) {
//           maxQuantity = that.state.styleSkus[i].quantity
//       }
//   }
//   for (let i = 1; i <= maxQuantity; i++) {
//       quantities.push(i)
//   }


//   return quantities
// }

// let getCurrentSize = function(newSku) {
//   let currentSize = 0;
//   for (let i = 0; i < this.styleSkus.length; i++) {
//       if (newSku === this.styleSkus[i].sku) {
//           currentSize = this.styleSkus[i].size
//       }
//   }
//   return currentSize
// }


class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productMainInfo: productMainInfo,
      productInfo: onloadState,
      currentStylePhotos: onloadState[0].style_photos,
      currentStyle: onloadState[0],
      styleSkus: [{quantity: 14, sizes: "7", sku: "1281202"}],
      currentSku: 1,
      currentSize: 7,
      itemsInStock: [1, 2, 3, 4]
  }
  this.componentDidMount = this.componentDidMount.bind(this)
  this.componentDidUpdate = this.componentDidUpdate.bind(this)
  this.handleChange = this.handleChange.bind(this)
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


componentDidUpdate(prevProps) {
  if (this.props.product_id !== prevProps.product_id) {
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
}


handleChange(event) {
  console.log('EVENT TARGET VALUE: ', event.target.value)
  let that = this;
//   let sizeToQuantity = function(currentSize) {
//     let maxQuantity = 0;
//     let quantities = [];
//     for (let i = 0; i < this.state.styleSkus.length; i++) {
//         if (this.state.styleSkus[i].size === currentSize) {
//             maxQuantity = this.state.styleSkus[i].quantity
//         }
//     }
//     for (let i = 1; i <= maxQuantity; i++) {
//         quantities.push(i)
//     }
//     return quantities
// }
let getCurrentSize = function(newSku) {
  let currentSize = 0;
  console.log('NEW SKUUUUU: ', newSku);
  console.log('FUNCTION this.state.styleSkus: ', this.state)
  for (let i = 0; i < this.state.styleSkus.length; i++) {
      if (newSku === this.state.styleSkus[i].sku) {
          currentSize = this.state.styleSkus[i].size
      }
  }
  return currentSize
}

let sizeToQuantity = function(currentSize) {
  // let that = this;
  let maxQuantity = 0;
  let quantities = [];
  for (let i = 0; i < this.state.styleSkus.length; i++) {
      if (this.state.styleSkus[i].size === currentSize) {
          maxQuantity = this.state.styleSkus[i].quantity
      }
  }
  for (let i = 1; i <= maxQuantity; i++) {
      quantities.push(i)
  }


  return quantities
}

let updatedSize = getCurrentSize(event.target.value)

that.setState({
  currentSku: event.target.value,
  currentSize: updatedSize,
  itemsInStock: sizeToQuantity(updatedSize)
});
}


render() {
  let skuArr = [];
  let productCategory = this.state.productMainInfo.category;
  let productName = this.state.productMainInfo.name;
  let productSlogan = this.state.productMainInfo.slogan;
  let productDescription = this.state.productMainInfo.description;
  let productFeatures = this.state.productMainInfo.features;
  let currentStylePhotos = this.state.currentStylePhotos;

  //utility variables
  let styleThumbnails = this.state.productInfo;
  let entryList = Object.entries(this.state.currentStyle);
  let skuObj = entryList[3][1];

  //utility functions
  for (let item in skuObj) {
    //         console.log(item)
            skuArr.push({
                sku: item,
                quantity: skuObj[item].quantity,
                sizes: skuObj[item].size
            })
        };




  //listing functions
  let styleThumbnailCircles = styleThumbnails.map(style => {
    return <img src={style.style_photos[0].thumbnail} className="selectStyle"></img>
  });

  let featuresBullets = productFeatures.map(feature => {
    return <li>{feature.feature}: {feature.value}</li>
  })

  let styleSizeList = this.state.styleSkus.map(sku => {
    return <option value={sku.sku}>{sku.sizes}</option>
  })
  let styleQuantityList = this.state.itemsInStock.map(quantitySelected => {
    return <option value={quantitySelected}>{quantitySelected}</option>
  })

  // console.log('SKU INFOOOOO: ', skuArr)

  // let productSize = currentStyle.

  // console.log('CURRENT STYLE: ', this.state.currentStyle)





return (
  <div className="overviewWrapper">overviewWrapper
  <div className="overviewProductDescriptionContainer">
    <div className="overviewImageGallery">
    <ProductGallery currentStylePhotos={currentStylePhotos} className="overviewImageGallery" />
    </div>
    <div className="overviewInformationContainer">
      <div className="overviewReviews">
        overviewReviews
      </div>
      <div className="overviewNameAndCat">
        <h4 className="category">{productCategory}</h4><br/>
        <h2><strong>{productName}</strong></h2>
      </div>
      <div className="overviewStyle">
      {styleThumbnailCircles}
      </div>
      <div className="overviewSizeSelector">
      <select className="btn selectSize" onChange={this.handleChange} value={this.state.currentSize}>
  {styleSizeList}
</select>
        {/*<button className="btn quantity">*/}{/*</button>*/}
        <select className="quantity" >
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
      <h5 className="slogan">{productSlogan}</h5>
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