import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Card({ current, onRelatedProductClick, Action, changeComparison }) {
  const [styles, setStyles] = useState(false);
  const [product, setProduct] = useState(false);

  useEffect(() => {
    let isMounted = true;
    axios.get(`/products/${current}/styles`).then((response) => {
      if (isMounted) setStyles(response.data.results[0]);
    });
    axios.get(`/products/${current}`).then((response) => {
      if (isMounted) setProduct(response.data);
    });
    return () => { isMounted = false }
  }, [current])

  //console.log('asdf', styles, current)
  if (!styles || !product) return <div>loading...</div>


  return (
      <div className="card">
        <img onClick={() => onRelatedProductClick(current)} src={styles.photos[0].thumbnail_url} style={{ height: "150px", width:'100%' }} />
        <Action changeComparison={changeComparison} product={product} />
        <div className="card-body">
          <div>{product.category}</div>
          <div>{product.name}</div>
          {!styles.sale_price && <p>{styles.original_price}</p>}
          {styles.sale_price && <p style={{ color: 'red' }}>{styles.sale_price}<s style={{ color: 'black' }}>{styles.original_price}</s></p>}
        </div>
    </div>
  )
}
