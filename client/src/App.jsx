import Navbar from "./componets/Navbar"
import Home from "./pages/Home"
import { Route, Routes, useLocation } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Footer from "./componets/Footer"
import { useAppContext } from "./context/AppContext"
import Login from "./componets/Login"
import AllProducts from "./pages/AllProducts"
import ProductCategory from "./pages/ProductCategory"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./componets/Cart"
import AddAddress from "./pages/AddAddress"
import MyOrders from "./pages/MyOrders"
import SellerLogin from "./componets/SellerLogin"
import SellerLayout from "./pages/seller/SellerLayout"
import AddProduct from "./pages/seller/AddProduct"
import Orders from "./pages/seller/Orders"
import ProductList from "./pages/seller/ProductList"
const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller")
  const {showUserLogin,isSeller} = useAppContext()
  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
        
        { isSellerPath ? null : <Navbar/>}
        {showUserLogin? <Login/>:null}
       <Toaster/>
        <div className={`${isSellerPath ? "":"px-6 md:px-16 lg:px-24 xl:px-32"}`}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<AllProducts/>} />
            <Route path="/products/:category" element={<ProductCategory/>} />
             <Route path="/products/:category/:id" element={<ProductDetails/>} />
             <Route path="/cart" element={<Cart/>} />
              <Route path="/add-address" element={<AddAddress/>} />
              <Route path="/my-orders" element={<MyOrders></MyOrders>}></Route>
              <Route path="/seller" element={isSeller ? <SellerLayout></SellerLayout> : <SellerLogin/>}>
              <Route index element={isSeller? <AddProduct/>: null}></Route>
              <Route path="product-list" element={<ProductList/>}></Route>
              <Route path="Orders" element={<Orders/>}></Route>
              </Route>
          </Routes>
        </div>
        {!isSellerPath && <Footer/>} 
    </div>
  )
}

export default App