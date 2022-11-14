import React from 'react';
import { useRef, useState, useEffect} from 'react';
import "./LoginPage.css";

export default function Login  () {

  const userRef = useRef();
  //const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  //const [errorMessage, seterrMess] = useState('');
  const [success, setSucces] = useState('');
  
  useEffect(() => {
    userRef.current.focus()
  }, [])

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(user, pwd);
      setUser('');
      setPwd('');
      setSucces(true);

  }
  return(
    <>
      {success ? (
        <section>
          <h1>Te has logueado correctamente</h1>
        </section>

      ):(
        <div className='auth-from-container'>
   
        <form onSubmit={handleSubmit}    className='login-form'>
            <h2>BIENVENIDO A AREPA.COM</h2>
            <label  htmlFor='email'>Email</label>
            <input  id='email' ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required type='email' placeholder='arepa@gmail.com'></input>
            <label  htmlFor='password'>Contraseña</label>
            <input id='password' ref={userRef} onChange={(e) => setPwd(e.target.value)} value={pwd} required type='password' placeholder='*******'></input>
            <button className='buttonSubmit' type='submit'>Ingresar</button>
        </form>
        
        <button className='buttonR'> ¿No tienes una cuenta?.. Registrate</button>
      </div>

      )}
    
    
    
    </>
    
  );
  
}