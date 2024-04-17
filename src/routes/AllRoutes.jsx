import {Routes, Route} from "react-router-dom"
import {HomePage, CartPage, OrderPage, DashboardPage, ProductsPage, ProductDetail, Login, PageNotFound, Register} from "../pages"
import { ProtectedRoute } from "./ProtectedRoute"

export default function AllRoutes() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/order" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
