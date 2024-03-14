import React, {useState} from "react";
import Home from "../HomePage/home";
import './login.css'

export default function LoginForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        const errors = validate();
        setErrors(errors);
        if (Object.keys(errors).length ===0 ){
            setIsLoggedIn(true)
        }        
    }


    const validate =() =>{
        const error ={};

        if (!email){
            error.email = "Email is required";
        } 
        else if (email!=="madhuripawar@gmail.com"){
            error.email= "Email not Matched";

        }
        else{
            error.email = ""; 
        }

        if (!password){
            error.password = "Password is required";
        }
        else if(password!== "abcd1234"){
            error.password= "Password not Matched";
        }
        
        else{
            error.password = ""; 
        }

        return error;
    }

    return(
        <div className="app-container pt-5">
            <div className="form-container">
            <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"> Email</label>
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>
                        {errors.email && <div className="error"> {errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
                        {errors.password && <div className="error"> {errors.password}</div>}
                    </div>
                    <button className="btn" type="submit">Login</button>
                    
                </form>
                <a href="https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10>">Submit</a>
                
            </div>


        </div>
    )
}