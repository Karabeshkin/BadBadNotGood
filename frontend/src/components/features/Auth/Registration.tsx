import React, { useState } from 'react'
import * as api from './api'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useNavigate } from 'react-router-dom';

export default function Registration():JSX.Element {
  const [login, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((store:RootState) => store.auth);
  const { user } = useSelector((store:RootState) => store.auth);
  console.log(user)
  

  if ('id' in user) {
    navigate('/');
  }



  const registr = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    api.registrationFetch({ login, password, email, score: 0 }) 
   .then((data) => dispatch({ type: 'auth/registration', payload: data }));

  };



  return (
    <div>
      <form onSubmit={registr}>
            <input name="name" placeholder="name" required onChange={(e) => setName(e.target.value)} />
            <input type="password" name="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
            <input type="email" name="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">register</button>
        </form>
    </div>
  )
}
