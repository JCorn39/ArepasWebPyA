import React, { useContext } from "react";
import "./Products.css";
import Filter from "./Filter/Filter";
import { FilterContext } from "../../components/Context/ContextFilter";
//import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import Card from "./Card/Card";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../layout/Footer/Footer";

export default function Products() {
  const { state } = useContext(FilterContext);

  const productsList = state.filteredItems.filter((product) => {
    return product.title.includes(state.searchKey) || !state.searchKey;
  });
  return (
    <>
      <Filter />
      <div className="search_Container">
        <div className="search_box">
          <SearchBar />
        </div>
      </div>
      <div className="product_container">
        {productsList.length > 1 ? (
          productsList.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <div className="not_products">
            <img
              className="products_empty_img"
              src="images/NoResultados.png"
              alt=""
            />
            <span className="products_empty_title">
             No hay productos que coincidan con la busqueda
            </span>
            <span className="products_empty_guide">
             Introduce otra palabra clave y prueba
            </span>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
