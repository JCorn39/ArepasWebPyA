import React from 'react';
import "./RegisterPage.css";

export default function Register  () {
 //const
 
 return(
    <>
    <div className='auth-from-container'>
        <div >
       
        <form className='register-form'>
            <h2>BIENVENIDO A AREPA.COM</h2>
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
            <button className='buttonSubmit' type='submit'>Registrarse</button>
        </form>
        <button className='buttonR'>¿Ya tienes una cuenta?.. Inicia sesion</button>
        </div>
    </div>
    </>
 );
    
}