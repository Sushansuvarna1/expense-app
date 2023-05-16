import axios from "axios"

// export const startAddProfile=(formData)=>{
//     console.log("f",formData)
//    return(dispatch)=>{
//    axios.post('http://localhost:3055/user/profile',formData,{
//     headers:{
//         'authentication' :  localStorage.getItem("token")
//     }
//    })
//    .then((response)=>{
//     const result=response.data
//     console.log("profile",result)
//    // dispatch(AddProfile(result))
//     dispatch(startListProfile())
//    })
//    .catch((err)=>{
//     console.log(err.message)
//    })
//    }
// }

// const AddProfile=(data)=>{
//     return{
//         type:"ADD_PROFILE",
//         payload:data
//     }
// }

export const startListProfile=()=>{
    return(dispatch)=>{
      axios.get("http://localhost:3055/user/profilelist",{
        headers:{
            'authentication' :  localStorage.getItem("token")
        }
    })
      .then((response)=>{
         const result=response.data
         console.log("profile",result)
         dispatch(setProfile(result))
        
      })
      .catch((err)=>{
        alert(err.message)
      })
    }
  }

  const setProfile=(data)=>{
    return{
      type:"SET_PROFILE",
      payload:data
    }
  }

  export const startUpdateProfile=(formData,id)=>{
   console.log("form",formData)
 
    return(dispatch)=>{
     axios.put(`http://localhost:3055/user/profileupdate/${id}`,formData,{
     headers:{
       'authentication' :  localStorage.getItem("token")
   }
  
   })
   .then((response)=>{
     const profile=response.data
     console.log(profile)
     dispatch(editProfile(profile))
     
   })
   .catch((err)=>{
     console.log(err.message)
   })
    }
  }

  const editProfile=(data)=>{
    return{
      type:"UPDATE_PROFILE",
      payload:data
    }
  }
  export const startUpdateProfilePic=(formData,id)=>{
    console.log("form",formData)
  
     return(dispatch)=>{
      axios.put(`http://localhost:3055/user/profilepicupdate/${id}`,formData,{
      headers:{
        'authentication' :  localStorage.getItem("token")
    }
   
    })
    .then((response)=>{
      const profile=response.data
      console.log(profile)
      dispatch(editProfilePic(profile))
      
    })
    .catch((err)=>{
      console.log(err.message)
    })
     }
   }
   
  const editProfilePic=(data)=>{
    return{
      type:"UPDATE_PROFILE_PiIC",
      payload:data
    }
  }
 