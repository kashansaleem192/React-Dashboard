import { Link } from "react-router-dom"
import  "./Card.css"

function Card({ product }) {
  return (
    <div className="Card" >
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img className="cardImage" src={product.image} alt={product.title} />
        <h3>{product.category}</h3>
        <h5>{product.title}</h5>
        <p>${product.price}</p>
      </Link>
    </div>
  )
}

export default Card
