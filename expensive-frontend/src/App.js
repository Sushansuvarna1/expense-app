import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
//import Pro from './reducers/Pro'

import "./App.css"

const App = () => {
   const [loggedIn, setLoggedIn] = useState(false)

   const handleAuth = () => {
      setLoggedIn(!loggedIn)
   }

   useEffect(() => {
      if (localStorage.getItem('token')) {
         handleAuth()
      }

   }, [])



   return (
      <div className="body">
       <NavBar loggedIn={loggedIn} handleAuth={handleAuth} />
      {/* <Pro/>*/}


      </div>

   )
}

export default App
