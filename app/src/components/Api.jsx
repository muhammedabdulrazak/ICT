import { TableCell, TableContainer,Table, TableHead, TableRow } from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useState } from 'react'

const Api = () => {
    var [user, setuser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
        })
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      < TableRow >
                          <TableCell>isl</TableCell> 
                          <TableCell>name</TableCell>
                          <TableCell>name</TableCell>
                          <TableCell>name</TableCell>
                          <TableCell>name</TableCell>
                          <TableCell>name</TableCell>
</TableRow>
                  </TableHead>
                     
                      {user.map((val) => {
                          return (
                              < TableRow >
                                  
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>


                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>
                                  <TableCell>{val.name}</TableCell>
                                  <TableCell>{val.address.city}</TableCell>


                     
                          
                              </TableRow>
                          )
                      })}
                
                      
              </Table>
          </TableContainer>
          
    </div>
  )
}

export default Api