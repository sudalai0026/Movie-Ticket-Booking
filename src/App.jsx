import Register from "./pages/Registeration"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Cart from "./pages/Cart"
import './App.css'
import { Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/cartcontext"


function App() {


  return (
    <>
      <CartProvider>
        <Routes>

          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:_id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
         
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
