import React from 'react';
import "./RegisterPage.css";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Register  () {
 //const
 
 return(
    <>
    <div className='auth-from-container'>
    <div className="register_container_linkBar">
            <div className="register_linkBar">
              <span>Ingresar</span>
              <Link className="register_backLink" to={"/"}>
              <HiArrowRight />
                Volver a productos
              </Link>
            </div>
            </div>
        <div >
        
       
        <form className='register-form'>
            <h2 className='RegisterPage'>BIENVENIDO A AREPAS CON TODO Y ALGO MÁS</h2>
            <label>Nombre</label>
            <input type='name' placeholder='Luis'></input>
            <label>Apellido</label>
            <input type='name' placeholder='Lopez'></input>
            <label>Direccion</label>
            <input placeholder='Calle 72 #88 B4 69'></input>
            <label>Telefono</label>
            <input placeholder='3167548950'></input>
            <label>Observaciones</label>
            <input placeholder='Segundo Piso, Casa sin ventanas'></input>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='arepa@gmail.com'></input>
            <label htmlFor='password'>Contraseña</label>
            <input type='password' placeholder='*******'></input>
            <button className='buttonSubmit' type='submit'><Link to={"/login"}>Registrarse</Link></button>
            <button className='buttonR'> <Link to={"/login"}> ¿Ya tienes una cuenta?.. Inicia sesion </Link>  </button>
        </form>
        
        </div>
    </div>
    </>
 );
    
}