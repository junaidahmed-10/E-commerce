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
import Account from "./pages/customer/account"
import Checkout from "./pages/customer/checkout"
import Listing from "./pages/customer/listing"
import Home from "./pages/customer/home"
import CheckAuth from "./components/common/checkAuth"




function App() {

  const isAuthenticated = true;
  const user = {
    name : "junaid",
    role : 'user'
  };

  return (
    <div className="flex flex-col overflow-hidden bg-white">

      <Routes>
          <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="signIn" element={<AuthSignIn />} />
          <Route path="signUp" element={<AuthSignUp />} />
        </Route>

        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        
        <Route path="/shop" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<Home />} />
          <Route path="accounts" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="listing" element={<Listing />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
