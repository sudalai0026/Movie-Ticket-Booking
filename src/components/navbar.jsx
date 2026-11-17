import image from "../assets/image.png"
import { ShoppingCart } from "lucide-react"
import "./navbar.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/cartcontext"

export default function Navbar({ search, setSearch }) {

  const { cart } = useContext(CartContext)

  const totalitems = cart.length;


  return (
    <>
      <div className="navbox" >



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

            <li><Link to="/home" className="home">Home</Link></li>

            <li><Link to="/" className="login">Login</Link></li>


            <li>
              <Link to="/cart">
                <ShoppingCart size={40}  color="#1a3f91"  className="cart-icon"/>


                {totalitems > 0 && <span className="cartcount">
                  {totalitems}
                </span>}

              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </>
  )
}





