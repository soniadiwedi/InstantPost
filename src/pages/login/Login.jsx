import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello People</h1>
          <p>InstantPost is your go-to platform for sharing your thoughts, ideas, and experiences with the world. Express yourself freely by creating posts on various topics and connect with others through likes and comments. Join our vibrant community today and start sharing your story with InstantPost!</p>
          <span>Don't you have an account?</span>
        <Link to="/register">
        
          <button>Register</button>
        </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" name="" id="" placeholder='Username' />
            <input type="password" name="" id="" placeholder='Password' />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login