import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ComparisonTable({ currentProduct, product, changeComparisonOff }) {
  const [topProduct, setTopProduct] = useState(false);
  useEffect(() => {
    let isMounted = true;
    axios.get(`/products/${currentProduct}`).then((response) => {
      if (isMounted) setTopProduct(response.data);
    });
    return () => { isMounted = false }
  }, [])
  let featuresArr = [];
  let topProductArr = [];
  let productArr = [];
  if (topProduct) {
    for (let i = 0; i < topProduct.features.length; i++) {
      if (!featuresArr.includes(topProduct.features[i].value)) {
        featuresArr.push(topProduct.features[i].value);
      }
      topProductArr.push(topProduct.features[i].value);
    }
    for (let i = 0; i < product.features.length; i++) {
      if (!featuresArr.includes(product.features[i].value)) {
        featuresArr.push(product.features[i].value)
      }
      productArr.push(product.features[i].value)
    }
  }
  return (
    <div className='comparison'>
        <h1>Comparing</h1>
        <table className="centerTable">
          <tbody>
            <tr>
              <td><strong>{topProduct.name}</strong></td>
              <td></td>
              <td><strong>{product.name}</strong></td>
            </tr>
            {featuresArr.map((currentFeature, i) => {
              let featureOfTopProduct = false;
              let featureOfRelated = false;
              if (topProductArr.includes(currentFeature)) {
                featureOfTopProduct = true;
              }
              if (productArr.includes(currentFeature)) {
                featureOfRelated = true;
              }
              return (
                <tr key={i}>
                  <td>{featureOfTopProduct && <>&#10004;</>}</td>
                  <td>{currentFeature}</td>
                  <td>{featureOfRelated && <>&#10004;</>}</td>
                </tr>)
            })}
          </tbody>
        </table>
        <br></br>
        <button className ="closeButton" onClick={changeComparisonOff}>CLOSE</button>
    </div>

  )
};