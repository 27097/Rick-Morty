import { useState, useEffect } from "react"
import Validation from "./Validation"





const Form =({login})=>{
 
const [userData, setUserData]= useState({username:'', password:''}) 
const [errors, setErrors]=useState({username:'', password:''})




const handleInputChange = (event)=>{
      setUserData({
        ...userData,
        [event.target.name ]:event.target.value
      });

     setErrors(Validation({
        ...userData,
        [event.target.name ]:event.target.value
     }))

}

const handleSubmit =(event)=>{
    event.preventDefault()
    // alert('entro')
    setUserData({
        username:'',
        password:''
    })
    login(userData)
}

    return(
        <form onSubmit={handleSubmit} >
           
            <label htmlFor="username"> User Name: </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} placeholder='code@gmail.com'/>
            {errors.username &&  <p style={{color:'red'}}> {errors.username} </p> }
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} placeholder='henry' />
            {errors.password && <p style={{color:'red'}} >{errors.password} </p> }
            <button>Submit</button>
        </form>
    )
}

export default Form