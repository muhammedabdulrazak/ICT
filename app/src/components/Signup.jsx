import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Table } from '@mui/material';



const Signup = () => {
  return (
      <div>
          <table border="10px" align='center'>
          
    
            <td>

          <TextField variant='outlined' label="name"/> <br /><br />
          <TextField variant='outlined' label="age"/> <br /><br />
          <TextField variant='outlined' label="phone" /> <br /><br />
         <Button variant="contained"> submit </Button>
      </td>
    </table>
    </div>
  )
}

export default Signup
