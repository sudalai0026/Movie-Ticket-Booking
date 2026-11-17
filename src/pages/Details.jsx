import { useState, useEffect } from "react"
import "./Details.css"
import Navbar from "../components/navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useContext } from "react"
import { CartContext } from "../context/cartcontext"


function Details() {
    const { addToCart } = useContext(CartContext);
    const [Details, setDetails] = useState(null)

    const navigate = useNavigate();
    function Back() {
        navigate(`/home`)
    }

    function Handlecart() {
        if (Details) {
            addToCart(Details)

        }
    }
    const { _id } = useParams();

    useEffect(() => {
        axios.get(`https://backend-crud-one.vercel.app/product/${_id}`)
            .then((res) =>
                setDetails(res.data))

            .catch((Error) => {
                console.log(Error)
            }
            )
    }, [_id])

    return (

        <>
            <Navbar />



            <div className="box1">

                {Details &&
                    <div className="box2">
                        <button onClick={() => Back()} className="back"> Back </button>
                        <img className="images" src={Details.image} />
                        <div className="para">
                            <h4><b>Releasedate:</b>{Details.releasedate}</h4>
                            <h4><b>Budget:</b> {Details.budget}</h4>
                            <h2>Description: {Details.description}</h2>

                           
                                <button className="btn">Booking Now</button>
                                <button  className="btn-right" onClick={Handlecart}>Add to Cart</button>
                            


                        </div>

                    </div>};

            </div>


        </>
    )


}
export default Details;