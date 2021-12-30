import React from 'react'

export default function AddToCompare ({changeComparison, product}) {
  return (
    <span onClick = {()=>changeComparison(product)}>&#9733;</span>
  )
}