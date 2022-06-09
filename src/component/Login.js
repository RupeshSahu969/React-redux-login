import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import "./login.css"

const Login = () => {

    const [name,setName] =useState("")
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")

    const dispatch=useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }))
    }


  return (
    <div className='login'>
    
        
        <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
    <h1>Login here</h1>
<input type="text" placeholder='enter name'
value={name}
onChange={(e) =>setName(e.target.value)}

/><br/>
<input type="email" placeholder='enter email'
value={email}
onChange={(e) =>setEmail(e.target.value)}

/><br/>
<input type="password" placeholder='enter password'
value={password}
onChange={(e) =>setPassword(e.target.value)}

/><br/>
<button type='submit' className='submit_btn'>Submit</button>
        </form>
        
        
        </div>
  )
}

export default Login