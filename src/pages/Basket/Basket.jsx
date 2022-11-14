import React, { useContext } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { ProductContext, ProductDispath } from "../../components/Context/ContextProvider";
import BasketItem from "./BasketItem";


export default function Basket() {
  const { state } = useContext(ProductContext);
  const { dispath } = useContext(ProductDispath);
  return (
    <>
      <div className="favorite_container_linkBar">
        <div className="favorite_linkBar">
          <span>Carrito</span>
          <Link className="favorite_backLink" to={"/"}>
          <HiArrowRight />
            Volver a productos
          </Link>
        </div>
        
      </div>
      {state.basket.length > 0 ? (
        <div className="basket_container">
          <div className="basket_itemBox">
            {state.basket.map((product) => (
              <BasketItem key={product.id} {...product} />
            ))}
          </div>
          <div className="basket_priceBox">
            <div className="basket_price">
              <span>Carrito de compra</span>
              <span>|</span>
              <span>{state.totalPrice.toLocaleString()} $ </span>
            </div>
            
            <div className="basket_send">
              <span>Valor Total a Pagar</span>
              <span>{state.totalPriceFainal.toLocaleString()} $ </span>
            </div>
            <button className="basket_button_buy">Ir a pagar</button>
            <button
              onClick={() => dispath({ type: "EMPTY_BASKET" })}
              className="basket_button_remove"
            >
              Eliminar {state.basket.length} Productos
            </button>
          </div>
        </div>
      ) : (
        <div className="favorite_empty">
          <img
            className="favorite_empty_img"
            src="images/empty-cart.png"
            alt=""
          />
          <span className="favorite_empty_title">El Carrito está vacío</span>
        </div>
      )}
    </>
  );
}
