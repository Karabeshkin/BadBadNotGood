import React, { useState } from 'react'

export default function Registration():JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const registr = (e:React.FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
   api.registrFetch({ name, password, email })
   .then((data) => dispatch({ type: 'auth/reg', payload: data }));
 };
 
  return (
    <div>
      <form onSubmit={registr}>
            <input name="name" placeholder="name" required onChange={(e) => setName(e.target.value)} />
            <input name="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)} />
            <input name="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">register</button>
        </form>
    </div>
  )
}
