import axios from "axios"
import Swal from 'sweetalert2'

export const startGetUser=(formData,props)=>{
   return()=>{
     axios.post('http://localhost:3055/user/register',formData)
     .then((response)=>{
        const user=response.data
        console.log("register",user)
        Swal.fire('successfull user registerd')
         props("/login")
       
     })
     .catch((err)=>{
      console.log(err.message)
     })
   }
}

export const startLoginUser=(formData,props,handleAuth)=>{
    return(dispatch)=>{
      axios.post('http://localhost:3055/user/login',formData)
      .then((response)=>{
         const user=response.data
         if(user.hasOwnProperty('errors')){
          dispatch(setError(user)) 
          
       }else{
        dispatch(setError({}))
        Swal.fire('successfull user logged in')
        localStorage.setItem("token",user.token)
        props("/account")
        handleAuth()
      
    
        }
  
      })
      .catch((err)=>{
       console.log(err.message)
      })
    }
}

const setError=(error)=>{
 
  return{
    type:"SET_ERROR",
    payload:error
  }
}

export const startAccountUser=()=>{
  
  return(dispatch)=>{
    axios.get('http://localhost:3055/user/account',{
      headers:{
          'authentication' :  localStorage.getItem("token")
      }
  })
  .then((response)=>{
    const account=response.data
    console.log(account)
    dispatch(setAccount(account))
  })
  .catch((err)=>{
    alert(err.message)
  })
  
  }
}

const setAccount=(detail)=>{
   return{
    type:"SET_ACCOUNT",
    payload:detail
   }
}



