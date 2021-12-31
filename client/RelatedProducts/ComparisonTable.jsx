import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ComparisonTable({ currentProduct, product }) {
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
      if (!featuresArr.includes(topProduct.features[i].feature)) {
        featuresArr.push(topProduct.features[i].feature);
      }
      topProductArr.push(topProduct.features[i].feature);
    }
    for (let i = 0; i < product.features.length; i++) {
      if (!featuresArr.includes(product.features[i].feature)) {
        featuresArr.push(product.features[i].feature)
      }
      productArr.push(product.features[i].feature)
    }
  }

  return (
    <>
      <h1>Comparing</h1>
      <table>
        <tbody>
          <tr>
            <td>{topProduct.name}</td>
            <td></td>
            <td>{product.name}</td>
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
    </>

  )
};