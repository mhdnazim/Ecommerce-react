import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Grid } from '@mui/material'
import '../App.css'
import Buy from '../components/Buy'

const ProductsList = () => {
    const [products , setProducts] = useState([])
    const [isLogin, setIsLogin] = useState(false)
      const [data, setData] = useState()
       const [open, setOpen] = useState(false)

       function handleBtnClick() {
         setOpen(true)
       }

    useEffect(()=>{
        const api = 'https://fakestoreapi.com/products'
        axios.get(api)
        .then(response=>{
            const apiData = response.data;
            setProducts(apiData)
            console.log(apiData , "apidata")
            // console.log(products, "setProducts")
        })

         const accessToken = localStorage.getItem("unique_id")
      if (accessToken) {
        setIsLogin(true)
      }
    },[])


     const handleClick = () => {
      const accessToken = localStorage.getItem("unique_id")
      if (!accessToken){
        // alert('please log in to view the item')
        setOpen(true)
        // document.getElementById("link").style.display = "none"
        // window.location.replace("/home")
      }
     }


  return (
    <>
      <div className="container">
        <Grid container>
          {products.map((item) => {
            return (
              <Grid className="grid" item key={item.id} xs={4}>
                <Link
                  id="link"
                  to={isLogin ? `/productview/${item.id}` : `/home`}
                  style={{ textDecoration: "none" }}
                  onClick={handleClick}
                >
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 250 }}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title.substring(0, 24)}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        style={{ textAlign: "center", color: "green" }}
                      >
                        $ {item.price}
                      </Typography>
                    </CardContent>
                    <button className="btn-buy" href="#">
                      Buy Now
                    </button>
                  </Card>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </div>
      <Buy open={open} setOpen={setOpen} />
    </>
  )
}

export default ProductsList