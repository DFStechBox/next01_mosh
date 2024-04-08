import React from 'react'
import UserTable from './UserTable'



const UsersPage = async () => {

    

  return (
    <>
      <h1>USERS</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <hr />
      <UserTable />
      
    </>
    
  )
}

export default UsersPage