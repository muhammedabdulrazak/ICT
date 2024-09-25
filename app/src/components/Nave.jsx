import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nave = () => {
  return (
      <div><AppBar>
          <Toolbar>
              <Typography variant='h6'>App</Typography>
              <Link to="/l">
                  <Button variant='contained'>login</Button>
              </Link>
              <Link to="/s">
                  <Button variant='contained'>signup</Button>
              </Link>
              <Link to="/st">
                  <Button variant='contained'>statement</Button>
              </Link>
              <Link to="/c">
                  <Button variant='contained'>count</Button>
              </Link>
              <Link to="/a">
                  <Button variant='contained'>API</Button>
              </Link>
              <Link to="/p">
                  <Button variant='contained'>Pokemon</Button>
              </Link>
          </Toolbar>
      </AppBar>
          <br />
          <br />
          <br />
          <br />
          
    </div>
  )
}

export default Nave
