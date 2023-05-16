 import axios from 'axios'
export const startCategoryUser=(formData)=>{
    console.log('formdata',formData)
    return (dispatch)=>{
      axios.post("http://localhost:3055/user/categories",formData,{
        headers:{
            'authentication' :  localStorage.getItem("token")
        }
    })
    .then((response)=>{
      const result=response.data
            console.log("result",result)
        dispatch(setUser(result))
        
      
      
    })
    .catch((err)=>{
      alert(err.message)
    })
    }
  }

  const setUser=(data)=>{
    return {
      type:"SET_USER",
      payload:data
    }
  }

 

  export const startListCategory=()=>{
    return(dispatch)=>{
      axios.get("http://localhost:3055/user/list",{
        headers:{
            'authentication' :  localStorage.getItem("token")
        }
    })
      .then((response)=>{
         const category=response.data
         console.log("category",category)
         dispatch(setCategory(category))
      })
      .catch((err)=>{
        alert(err.message)
      })
    }
  }


  const setCategory=(data)=>{
    return {
      type:"SET_CATEGORY",
      payload:data
    }
  }

  export const startRemoveList=(id)=>{
   
    return (dispatch)=>{
     axios.delete(`http://localhost:3055/user/delete/${id}`,{
        headers:{
            'authentication' :  localStorage.getItem("token")
        }
     })
     .then((response)=>{
        const result=response.data
        console.log("delete",result)
        dispatch(removeItem(result._id))
     })
     .catch((err)=>{
        alert(err.mesaage)
     })
    }
  }

  const removeItem=(id)=>{
    return{
      type:"REMOVE_ITEM",
      payload:id
    }
  }