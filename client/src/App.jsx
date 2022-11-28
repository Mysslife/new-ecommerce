import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Error from './pages/Error/Error';
import './app.scss';

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: "/products/:id",
          element: <Products />,
          errorElement: <Error />,
        },
        {
          path: "/product/:id",
          element: <Product />,
          errorElement: <Error />,
        }
      ]
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
