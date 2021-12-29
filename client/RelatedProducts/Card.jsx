import React, {useState, useEffect} from 'react';
import axios from 'axios';

//image img
//information
//actions

export default function Card({ current }) {
  const [styles, setStyles] = useState(false);
  const [productCategory, setCategory] = useState(false);

  useEffect(()=>{
    let isMounted = true;
    axios.get(`/products/${current}/styles`).then((response)=>{
      if (isMounted) setStyles(response.data.results[0]);
    });
    axios.get(`/products/${current}`).then((response)=>{
      if (isMounted) setCategory(response.data.category);
    });
    return () => { isMounted = false }
  }, [current])

  //console.log('asdf', styles, current)
  if (!styles || !productCategory) return <div>loading...</div>


  return <div> {productCategory} </div>
}
