import axios from "axios"


export const startBudgetUser=()=>{
    return(dispatch)=>{
      axios.get("http://localhost:3055/user/budget",{
        headers:{
            'authentication' :  localStorage.getItem("token")
        }
    })
      .then((response)=>{
         const budget=response.data
         dispatch(setBudget(budget))
      })
      .catch((err)=>{
        alert(err.message)
      })
    }
  }

  const setBudget=(amount)=>{
    return{
      type:"SET_BUDGET",
      payload:amount
    }
  }


  export const startUpdateUser=(formData)=>{
    console.log(formData)
    return (dispatch)=>{
     axios.put(`http://localhost:3055/user/update/${formData._id}`,formData,{
        headers:{
            'authentication' :  localStorage.getItem("token")
        }
    })
    .then((response)=>{
        const result=response.data
        dispatch(setUpdate(result))
    })
    .catch((err)=>{
        alert(err.message)
    })
    }
  }

  const setUpdate=(update)=>{
     return{
        type:"SET_UPDATE",
        payload:update
     }
  }


  