import React, { useContext, useEffect, useState } from 'react'
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import AccountCircle from "@mui/icons-material/AccountCircle"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Views from './Views'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import UserContext from '../UserContext'
import Log from '../pages/LogDialogBox'

const Header = () => {
     const [auth, setAuth] = useState(true)
     const [anchorEl, setAnchorEl] = useState(null)
    //  const [LogText, setLogText] = useState("")
     const [isLogin,setIsLogin] = useState(false)
     const [open, setOpen] = useState(false)
     const navigate = useNavigate()

     const [log, SetLog] = useState(false)

     function handleBtnClick() {
         setOpen(true)
       }

    // const [dataFromChild, setDataFromChild] = useState("")

      //  function handleDataFromChild(data) {
      //    setDataFromChild(data)
      //  }
     const { isLogged , setIsLogged, profile } = useContext(UserContext)
       console.log(isLogged,"fromheader")

       
     const handleMenu = (event) => {
       setAnchorEl(event.currentTarget)
     }

     const handleClose = () => {
       setAnchorEl(null)
     }

    useEffect(() => {
      const accessToken = localStorage.getItem("unique_id")
      if (accessToken) {
        setIsLogin(true)
        document.getElementById("icon").style.display = "block"
      }else if(!accessToken){
        document.getElementById("icon").style.display = "none"
      }
    }, [setIsLogin,isLogged,setIsLogged,profile,isLogin])

    const handleClick = () => {
     const accessToken = localStorage.getItem("unique_id")
     if (!accessToken) {
      navigate('/login')
      //  window.location.replace("/login")
      // SetLog(true)
     } else {
      setOpen(true)
      //  window.localStorage.removeItem("unique_id")
      // window.localStorage.removeItem("user_details")
      //  window.location.replace("/login")
     }
   }

  return (
    <div>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link
                  to="/home"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Photos
                </Link>
              </Typography>

              <div id="login" style={{ marginRight: "10px" }}>
                <button className="btn-log" onClick={handleClick}>
                  {isLogin ? "Log out" : "Log in"}
                </button>
              </div>
              {auth && (
                <div id="icon">
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>{profile}</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleBtnClick}
                      >
                        {" "}
                        Log Out{" "}
                      </Button>
                      <Views open={open} setOpen={setOpen} />
                      <Log log={log} SetLog={SetLog} />
                    </MenuItem>
                  </Menu>
                </div>
              )}
              {/* <Link to={'/login'}><Button variant="contained" color="success" style={{color:"white",marginRight:"20px"}}>Log In</Button></Link> */}
              <ShoppingCartIcon />
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </div>
  )
}

export default Header