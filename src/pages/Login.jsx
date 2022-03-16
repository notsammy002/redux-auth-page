import React from 'react'
import { useDispatch} from 'react-redux'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { login } from '../store/auth/auth.api';

//cityslicka
export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("eve.holt@reqres.in")
  const [password, setPassword] = useState("")

  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    if(!isLoading)
    {e.preventDefault();
    dispatch(login({email, password}));  } 
  }

  
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input 
        type="email" 
        placeholder='email'
        value={ email}
        onChange={(e) => setEmail(e.currentTarget.value)} />

        <input 
        type="password" 
        placeholder='password'
        value={ password }
        onChange={(e) => setPassword(e.currentTarget.value)} 
         />
        <div>
          <button type='submit'>{
          isLoading ? "Loading..." : "login"}
          </button>
        </div>
        {error && <h1>Something went wrong</h1>}
      </form>
    </div>
  )
}
