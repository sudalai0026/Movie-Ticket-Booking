
import image from "../assets/image.png"
import { ShoppingCart, MoreVertical } from "lucide-react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../context/cartcontext"

export default function Navbar({ search, setSearch }) {

  const [menuopen, setMenuopen] = useState(false)

  const { cart } = useContext(CartContext)

  const totalitems = cart.length;

  return (
    <>
      <div className="navbox">
        <nav>
          <ul className="nav">

            <li className="brand">
              <img src={image} className="age" />
              <h1>
                <span className="quick">Quick</span>
                <span className="ticket">Ticket</span>
              </h1>
            </li>

            <input
              className="in"
              type="text"
              placeholder="search the movies..."
              value={search || ""}
              onChange={(i) => setSearch(i.target.value)}
            />

            <li className="threedot">

              <button onClick={() => setMenuopen(!menuopen)}>
                <MoreVertical />
              </button>

              <div className={`dropdown-menu ${menuopen ? "show" : ""}`}>

                <Link to="/home" className="home" onClick={() => setMenuopen(false)}>
                  Home
                </Link>

                <Link to="/" className="login" onClick={() => setMenuopen(false)}>
                  Login
                </Link>

                <Link to="/cart" onClick={() => setMenuopen(false)}>
                  <ShoppingCart size={40} color="#1a3f91" className="cart-icon" />
                  <span className="cartcount">{totalitems}</span>
                </Link>

              </div>

            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}
