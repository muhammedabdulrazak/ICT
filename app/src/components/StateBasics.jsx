import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  // var name = 'shinas'
  var [fname, setfname] = useState("shinas")
  var [lname, setlname] = useState()


  const handleInput = (e) => {
    console.log(e.target.value)
    setfname(e.target.value)
  }
  
  const handleinput = () => {
    setlname(fname)
  }

  return (
    <div>
      <Typography variant="h4"> welcome {lname} </Typography>
      <TextField variant='outlined' onChange={handleInput} />
      <Button variant='outlined' onClick={handleinput} >Submit</Button>

    </div>
  )

}

export default StateBasics