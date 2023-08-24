import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsList } from "../pages/Products/ProductsList";
import { CartPage, Login, OrderPage, ProductDetail, Register } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";


export const  AllRoutes = () => {
  const token = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsList />}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path="order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />

      </Routes>
    </>
  )
}
