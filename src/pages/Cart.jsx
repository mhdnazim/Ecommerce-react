import { Grid } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Order from "../components/Order"

const Cart = () => {
      const [products, setProducts] = useState([])
      const { id } = useParams()
      const [open, setOpen] = useState(false)

      function handleBtnClick() {
        
      }
      console.log(id,"from cart");



  useEffect(() => {
     const accessToken = localStorage.getItem("unique_id")
     if (!accessToken) {
       window.location.replace("/home")
     }
    
    const api = `https://fakestoreapi.com/products/${id}`
    axios.get(api).then((response) => {
      const apiData = response.data
      setProducts(apiData)
      console.log(apiData, "apidata")
      // console.log(products, "setProducts")
    })
  }, [])

  const handlesubmit = async (e) => {
    e.preventDefault()
    setOpen(true)
  }

  return (
    <>
      {/* ================================== */}
      <div>
        <h1 style={{ textAlign: "center" }}>Cart</h1>
        <hr />
        <Grid container>
          <Grid item xs={6}>
            <div className="img">
              <img
                src={products.image}
                alt=""
                style={{ height: "50%", width: "50%" }}
              />
            </div>
            <br />
          </Grid>
          <Grid item xs={6}>
            <form onSubmit={(e) => handlesubmit(e)}>
              <h1>{products.title} </h1>
              <h2>
                {" "}
                Please Enter Quantity &nbsp;{" "}
                <input
                  type="number"
                  name=""
                  id=""
                  style={{ width: "60px", height: "30px" }}
                  required
                />{" "}
              </h2>
              <div>
                <h3>Address:</h3>
                <address>
                  Muhammed Nasim <br />
                  Visit me at <br />
                  abcd@gmail.com <br />
                  box 574, Desny Land <br />
                  USA
                </address>
              </div>
              <div>
                <h3>Payment Mode</h3>
                <input type="radio" name="payment" id="upi" required />
                <label htmlFor="upi">UPI / INTERNET BANKING</label> <br />
                <input type="radio" name="payment" id="upi" required />
                <label htmlFor="upi">CREDIT CARD / DEBIT CARD</label> <br />
                <input type="radio" name="payment" id="upi" required />
                <label htmlFor="upi">CASH ON DELIVERY</label> <br />
                <input type="radio" name="payment" id="upi" required />
                <label htmlFor="upi">PAY LATER / EMI</label>
                <button className="btn-buy3" href="#" type="submit" >
                  Buy Now
                </button>
                <Order open={open} setOpen={setOpen}/>
              </div>
            </form>
          </Grid>
        </Grid>
        <div className="btn"></div>
      </div>
    </>
  )
}

export default Cart
