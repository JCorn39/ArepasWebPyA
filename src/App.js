import { Navigate, useRoutes } from 'react-router-dom';
import Basket from './pages/Basket/Basket';
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './pages/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './layout/Header/Header';
import Products from './pages/Products/Products';
import Login from './components/Login-Register/LoginPage';
import Register from './components/Login-Register/RegisterPage';
import Facture from './components/Facture/FacturePage';



function App() {
  let router = useRoutes([
    { path: '/', element: <Products /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/basket', element: <Basket /> },
    { path: '*', element: <Navigate to={'/'} /> },
    { path: '/facture', element: <Facture /> },

  ])
  return (
    <ContextProvider>
      <ContextFilter>
        <Header />
        {router}
      </ContextFilter>
    </ContextProvider>
  );
}

export default App;
