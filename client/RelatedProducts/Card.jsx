import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';


export default function Card({ current, onRelatedProductClick, Action, changeAction }) {
  const [styles, setStyles] = useState(false);
  const [product, setProduct] = useState(false);
  const [starRating, setStars] = useState(0);

  useEffect(() => {
    let isMounted = true;
    axios.get(`/products/${current}/styles`).then((response) => {
      if (isMounted) setStyles(response.data.results[0]);
    });
    axios.get(`/products/${current}`).then((response) => {
      if (isMounted) setProduct(response.data);
    });
    axios.get(`/reviews/meta?product_id=${current}`).then((response) => {
      if(response.data.ratings.avg !== 'NaN') {
        if (isMounted) setStars(parseFloat(response.data.ratings.avg));
      }
    })
    return () => { isMounted = false }
  }, [current])

  if (!styles || !product) return <div>loading...</div>

  return (
    <div className="card">
      <img onClick={() => onRelatedProductClick(current)} src={styles.photos[0].thumbnail_url || 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg'} style={{ height: "150px", width: '100%' }} />
      <Action changeAction={changeAction} product={product} />
      <div className="card-body" onClick={() => onRelatedProductClick(current)}>
        <div>{product.category}</div>
        <div>{product.name}</div>
        {!styles.sale_price && <p>{styles.original_price}</p>}
        {styles.sale_price && <p style={{ color: 'red' }}>{styles.sale_price}<s style={{ color: 'black' }}>{styles.original_price}</s></p>}
        <StarRatings
          rating={starRating}
          numberOfStars={5}
          starDimension="20px"
          starSpacing="2px"
          starRatedColor="black"
          starEmptyColor= "grey"
        />
      </div>
    </div>
  )
}
