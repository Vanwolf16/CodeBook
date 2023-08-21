import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/HomePage";
import { ProductsList } from "../pages/Products/ProductsList";
import { Login, ProductDetail, Register } from "../pages";


export const  AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<ProductsList />}/>
        <Route path="/products/:id" element={<ProductDetail />} />
        
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}
