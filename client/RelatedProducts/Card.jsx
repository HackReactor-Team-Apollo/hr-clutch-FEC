import React, {useState, useEffect} from 'react';
import axios from 'axios';

//image img
//information
//actions

export default function Card({ current, onRelatedProductClick }) {
  const [styles, setStyles] = useState(false);
  const [product, setProduct] = useState(false);

  useEffect(()=>{
    let isMounted = true;
    axios.get(`/products/${current}/styles`).then((response)=>{
      if (isMounted) setStyles(response.data.results[0]);
    });
    axios.get(`/products/${current}`).then((response)=>{
      if (isMounted) setProduct(response.data);
    });
    return () => { isMounted = false }
  }, [current])

  //console.log('asdf', styles, current)
  if (!styles || !product) return <div>loading...</div>


  return (<div onClick = {()=>onRelatedProductClick(current)}>
      <img src = {styles.photos[0].thumbnail_url} />
      <div>
      {product.category}
      {product.name}
      {!styles.sale_price && <p>{styles.original_price}</p>}
      {styles.sale_price && <p style="color:red">{styles.sale_price}<s>{styles.original_price}</s></p>}

      </div>

    </div>)
}
