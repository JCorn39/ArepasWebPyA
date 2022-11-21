import React from 'react';
import { useRef, useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
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
          <Link to={"/"}>aaa</Link>
        </section>

      ):(
        
        <div className='auth-from-container'>
          <div className="login_container_linkBar">
            <div className="login_linkBar">
              <span>Ingresar</span>
              <Link className="login_backLink" to={"/"}>
              <HiArrowRight />
                Volver a productos
              </Link>
            </div>
            </div>
   
        <form onSubmit={handleSubmit}    className='login-form'>

            <h2 >BIENVENIDO A AREPAS CON TODO Y ALGO MÁS</h2>
            <label  htmlFor='email'>Email</label>
            <input  id='email' ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required type='email' placeholder='arepa@gmail.com'></input>
            <label  htmlFor='password'>Contraseña</label>
            <input id='password' ref={userRef} onChange={(e) => setPwd(e.target.value)} value={pwd} required type='password' placeholder='*******'></input>
            <button className='buttonSubmit' type='submit'> <Link to={"/"}>Ingresar</Link></button>
        </form>
        
        <button className='buttonR'> <Link to={"/register"}>¿No tienes una cuenta?.. Registrate</Link></button>
      </div>

      )}
    
    </>
    
  );
  
}