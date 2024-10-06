import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/authLayout"
import AuthSignIn from "./pages/auth/authSignIn"
import AuthSignUp from "./pages/auth/authSignup"
import AdminLayout from "./components/admin/layout"
import AdminDashboard from "./pages/admin/dashboard"
import AdminProducts from "./pages/admin/products"
import AdminOrders from "./pages/admin/orders"
import AdminFeatures from "./pages/admin/features"
import ShoppingLayout from "./components/customer/layout"
import NotFound from "./pages/NotFound/notFound"




function App() {

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="signIn" element={<AuthSignIn />} />
          <Route path="signUp" element={<AuthSignUp />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route path="/shop" element={<ShoppingLayout />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
