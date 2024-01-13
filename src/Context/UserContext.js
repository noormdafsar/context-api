import React from 'react'
const UserContext = React.createContext()
export default UserContext;

{/* <UserContext> //This is act as Provider
    <Login/> 
    <Card/>  //These components get access of all the UserContext
    <Data/>
</UserContext> */}