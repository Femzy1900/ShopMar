import { useState, useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SummaryApi from "./common";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Context from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import CategoryProduct from "./pages/CategoryProduct";
import ProductDetails from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import SearchProduct from "./pages/SearchProduct";
import OrderPage from "./pages/OrderPage";
import AdminPanel from "./pages/Adminpanel";
import AllUser from "./pages/AllUser";
import AllProducts from "./pages/AllProducts";

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.currentUser.url, {
      method: SummaryApi.currentUser.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }
  };

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: "include"
    });

    const dataApi = await dataResponse.json()

    console.log('dataApi', dataApi)
    setCartProductCount(dataApi?.data?.count)
  };

  useEffect(() => {
    fetchUserDetails;
    fetchUserAddToCart();
  }, []);

  return (
    <BrowserRouter>
      <Context.Provider
        value={{ fetchUserDetails, cartProductCount, fetchUserAddToCart }}
      >
        <ToastContainer position="top-center" />

        <Header />
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="sign-up" element={<Signup />} />
            <Route path="product-category" element={<CategoryProduct />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="search" element={<SearchProduct />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="admin-panel" element={<AdminPanel />} />
            <Route path="admin-panel/all-users" element={<AllUser />} />
            <Route path="admin-panel/all-products" element={<AllProducts />} />
          </Routes>
        </main>
        <Footer />
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
