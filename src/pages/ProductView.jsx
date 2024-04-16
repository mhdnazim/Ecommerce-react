import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductView = () => {
    const [buttonText, setButtonText] = useState("Add to Cart")
    const {id} = useParams();
    console.log(id);
    const navigate = useNavigate()


    const [products, setProducts] = useState([])
    const [isCart, setIsCart] = useState(false)

    const handleClick = () => {
      setButtonText(
        buttonText === "Add to Cart" ? "Go to Cart" : "Add to Cart"
      )
      if (buttonText === "Go to Cart") {
        navigate(`/cart/${id}`)
        // window.location.replace(`/cart/${id}`)
      }
    }
    const handleBuy = () => {
      navigate(`/cart/${id}`)
        // window.location.replace(`/cart/${id}`)
    }

    useEffect(() => {
      const accessToken = localStorage.getItem("unique_id")
      if (!accessToken) {
        window.location.replace("/home")
      }

      const api = `https://fakestoreapi.com/products/${id}`
      axios.get(api).then((response) => {
        const apiData = response.data
        setProducts(apiData)
        console.log(apiData , "apidata")
        // console.log(products, "setProducts")
      })
    }, [])

      

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <div className='img'>
            <img src={products.image} alt="" style={{ height: "50%",width:"50%" }} />
          </div>
          <br />
          <div className="btn">
            <button className="btn-buy2" onClick={handleBuy}>Buy Now</button>
             <button className='btn-cart' onClick={handleClick} >{buttonText}</button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <h1>{products.title}</h1>
          <h2>{products.category}</h2>
          <h3>$ {products.price}</h3>
          <p>{products.description}</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductView