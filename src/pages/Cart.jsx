import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
import Navbar from "../components/navbar";
import {useNavigate} from "react-router-dom"
function Cart() {

    const { cart, updateQuantity } = useContext(CartContext);


    const navigate = useNavigate();
    function Back() {
        navigate(-1)
    }
    return (
        <>
            <Navbar />

            <div>

                <button onClick={() => Back()} className="add-bck"> Back </button>
                {cart.length === 0 ? (
                    <h2 className="empty-cart">This cart is Empty ....</h2>
                ) : (
                    cart.map((movie) => (
                        <div className="box" key={movie._id}>

                            <img className="photo" src={movie.image} />

                            <div className="para">
                                 
                                <p><b>Name:</b>{movie.name}</p>
                                 <p><b>quantity:</b>{movie.quantity}</p>
                            </div>

                            <div className="countbox">
                               
                                <button className="q-btn"onClick={() => updateQuantity(movie._id, -1)}>-</button>
                                <span>{movie.quantity}</span>
                                <button className="q-btn" onClick={() => updateQuantity(movie._id, 1)}>+</button>
                               
                               
                                <p className="price">Price:₹{Number(movie.ticketprice) * movie.quantity}</p>

                            </div>

                        </div>))

                )}
            </div>

        </>
    )
};
export default Cart

