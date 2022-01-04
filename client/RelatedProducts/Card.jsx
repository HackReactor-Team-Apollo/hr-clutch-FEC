import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from './StarRatings.jsx';


export default function Card({ current, onRelatedProductClick, Action, changeAction }) {
  const [styles, setStyles] = useState(false);
  const [product, setProduct] = useState(false);
  const [starRating, setStars] = useState(null);
  const [leftPercentage, setLeft] = useState(null);
  const [rightPercentage, setRight] = useState(null);
  useEffect(() => {
    let isMounted = true;
    axios.get(`/products/${current}/styles`).then((response) => {
      if (isMounted) setStyles(response.data.results[0]);
    });
    axios.get(`/products/${current}`).then((response) => {
      if (isMounted) setProduct(response.data);
    });
    axios.get(`/reviews/meta?product_id=${current}`).then((response) => {
      if (response.data.ratings.avg !== 'NaN') {
        if (isMounted) {
          setStars(parseFloat(response.data.ratings.avg));
          setLeft((parseFloat(response.data.ratings.avg) / 5) * 100)
          setRight(100 - ((parseFloat(response.data.ratings.avg) / 5) * 100))
        }
      } else {
        if (isMounted) {
          setLeft(0);
          setRight(100);
        }
      }
    })
    return () => { isMounted = false }
  }, [current])

  if (!styles || !product || !starRating || !leftPercentage || !rightPercentage) return <div>loading...</div>

  return (
    <div className="card">
      <img onClick={() => onRelatedProductClick(current)} src={styles.photos[0].thumbnail_url || 'https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg'} style={{ height: "175px", width: '100%' }} />
      <Action changeAction={changeAction} product={product} />
      <div className="card-body" onClick={() => onRelatedProductClick(current)}>
        <div className="smaller">{product.category.toUpperCase()}</div>
        <div className="small"><strong>{product.name}</strong></div>
        {!styles.sale_price && <p className="small">${styles.original_price}</p>}
        {styles.sale_price && <p className="small" style={{ color: 'red' }}>${styles.sale_price}<s className="small" style={{ color: 'black' }}>{styles.original_price}</s></p>}
        <StarRating currentRating={starRating} leftPercentage={leftPercentage} rightPercentage={rightPercentage}
        />
      </div>
    </div>
  )
}
