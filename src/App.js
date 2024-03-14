
import LoginForm from "../src/LoginScreen/login";
import Home from "./HomePage/home";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="page">
      <LoginForm />  
      {isLoggedIn? <Home/> : "Login"}
      </div>

    
  );
}

export default App;