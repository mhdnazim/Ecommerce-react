import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

const Order = ({ open, setOpen }) => {
  const handleToClose = () => {
    setOpen(false)
  }

  const navigate = useNavigate()

  const handleToLogout = () => {
    setOpen(false)
    // window.location.replace("/home")
    navigate('/home')
  }

  return (
    <div>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Are you Sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your order updates will send to your phone number +91 98xxxxxx99
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToLogout} color="primary" autoFocus>
            OKEY ! PLACE ORDER.
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Order
