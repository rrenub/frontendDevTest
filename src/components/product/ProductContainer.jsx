import React from 'react'
import { useParams } from 'react-router';

export default function ProductContainer() {
  let { id } = useParams();

  return (
    <div>Showing product {id}</div>
  )
}
