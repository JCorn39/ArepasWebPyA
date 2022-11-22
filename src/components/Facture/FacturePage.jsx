//import React from 'react';
import "./FacturePage.css";
import React, { useContext } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ProductContext} from "../../components/Context/ContextProvider";

let x = 1;
const FacNum = x++;
//document.getElementById("FacNum").innerHTML = FacNum; 

export default function Facture  () {
    const { state } = useContext(ProductContext);
    //const { dispath } = useContext(ProductDispath);
 
 return(
    <>
    <div className='auth-from-container'>
    <div className="facture_container_linkBar">
            <div className="facture_linkBar">
              <span>Factura</span>
              <Link className="facture_backLink" to={"/basket"}>
              <HiArrowRight />
                Volver al carrito
              </Link>
            </div>
            </div>
        <div >
        
       
        <form className='facture-form'>
            <h2 className='FacturePage'>Facturacion del producto</h2>
            <h2 className='FacturePage'>Datos de facturacion</h2>

            <h2 className='FacturePage'>Numero factura</h2>
            <h1 className='FacturePage'>Factura #<span>{FacNum}</span></h1>

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
            <label>Valor a pagar</label>
            <span>{state.totalPriceFainal.toLocaleString()} $ </span>
            
            
        </form>
        
        </div>
    </div>
    </>
 );
    
}