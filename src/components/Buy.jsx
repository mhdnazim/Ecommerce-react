import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"
import React, { useState } from "react"

const Buy = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false)
  // const [data, setData] = useState("")

  // function handleClick() {
  //   sendDataToParent(data)
  // }

  // const handleClickToOpen = () => {
  //   setOpen(true)
  // }

  const handleToClose = () => {
    setOpen(false)
  }

  const handleToLogout = () => {
    setOpen(false)
    window.location.replace("/login")
  }

  return (
    <div>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Please Log In..."}</DialogTitle>
        <DialogContent>
          <DialogContentText>Please log in to Continue...</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Cancel
          </Button>
          <Button onClick={handleToLogout} color="primary" autoFocus>
            Log In
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Buy
