import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import "./Product.css"

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        setProduct(data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }

    fetchProduct()
  }, [id])

  if (!product) return <h2>Loading...</h2>

  return (
    <div
      className="product-container"
      style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}
    >
      <img src={product.image} alt={product.title} style={{ width: "250px" }} />
      <h2>{product.title}</h2>
      <h3>{product.category}</h3>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
    </div>
  )
}

export default Product
