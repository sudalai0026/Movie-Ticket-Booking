import './Home.css'
import { useState, useEffect } from "react";
import axios from "axios"
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom"
import {useContext} from "react"
import { CartContext } from '../context/cartcontext';
import Carousel from '../components/carousel';

function Home() {
   
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([]);
    const {addToCart}=useContext(CartContext);
    const navigate = useNavigate();
   
    function Handledetails(_id) {
        navigate(`/details/${_id}`);
    }


    useEffect(() => {
        axios
            .get('https://backend-crud-one.vercel.app/product/')
            .then((Response) =>{
                console.log("movie data:",(Response.data))
                setMovies(Response.data)})
            .catch((Error) => {
                console.log(Error)
            })
    },[])

    return (
    
    <>
          
            <Navbar search={search} setSearch={setSearch} />

            <Carousel movies={movies} />
          
            <div className="container">

                {movies
                    .filter((movie) =>
                        movie.title.toLowerCase().includes(search.toLowerCase()))
                    .map((movie) => (
                        <div className="con"
                            key={movie._id}>

                            <div className="imagebox">
                                <img
                                    className="img"
                                    src={movie.image}
                                /></div>

                            <h3><b>Title:</b>{movie.name}</h3>

                            <button
                                onClick={() => Handledetails(movie._id)}
                                className="ton">DETAILS
                                </button>
                                
                              <button
                                onClick={()=>addToCart(movie)}
                                className="ton">ADD TO CART
                                </button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Home