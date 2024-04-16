import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'


const Views = ({  open , setOpen }) => {
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
    window.localStorage.removeItem("unique_id")
    window.localStorage.removeItem("user_details")
    window.location.replace("/home")
  }

  return (
    <div>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you Log Out , you will redirect to the Log In page...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToLogout} color="primary" autoFocus>
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Views