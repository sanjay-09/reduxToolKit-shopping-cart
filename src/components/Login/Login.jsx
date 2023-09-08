import React,{useState} from 'react';
import "./Login.scss";
import { axiosClient } from '../../Utils/axiosClient';
import { KEY_ACCESS_TOKEN,setItem } from '../../Utils/LocalStorage';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState(''); 
    const navigate=useNavigate();
    async  function handleSubmit(e){
        console.log(email);
        console.log(password);
        e.preventDefault();
        try{
        const response= await axiosClient.post('/auth/login',{
            email:email,
            password:password
        })
        console.log(response);
        setItem(KEY_ACCESS_TOKEN, response.data.result.accessToken);
        navigate("/");
        
        
    }
    catch(error){
        console.log(error);
    }
        
    }

  return (
    <div className="Login">
        <div className="Login-box">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" className="email" id="email" onChange={(e)=>{setEmail(e.target.value)}}/>

            <label htmlFor="password">Password</label>
            <input type="password" className="password" id="password" onChange={(e)=>{setPassword(e.target.value)}}/>

            
            <input type="submit" className="Submit" onClick={handleSubmit}/>
        </form>
        <p className='Sign-button'>Do not have an account? <Link to="/signup">SignUp</Link></p>
        </div>
       
    </div>
  )
}


export default Login
