import React from 'react'

export default function RemoveFavorite ({changeAction, product}) {
  return (
    <span className="topright" onClick = {()=>changeAction(product)}>&#10008;</span>
  )
}