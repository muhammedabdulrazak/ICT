import React from 'react'

const Login = () => {
  return (
      <div>
          <table border="10px" align='center'>
              <td>
          <h1>Login page</h1><br/><br/>
          <input type="text" name="name" /><br/><br/>
          <input type="email" name="email"  /><br/><br/>
                  <input type="password" name="password" /><br /><br />
              </td>
          </table>
    </div>
  )
}

export default Login