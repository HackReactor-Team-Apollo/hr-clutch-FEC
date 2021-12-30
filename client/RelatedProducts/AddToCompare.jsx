import React from 'react'

export default function AddToCompare ({changeAction, product}) {
  return (
    <span className="topright" onClick = {()=>changeAction(product)}>&#9733;</span>
  )
}