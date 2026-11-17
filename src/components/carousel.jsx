
import "./carousel.css"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
function Carousel({ movies }) {
    const navigate=useNavigate();
    const [runmovie, setrunmovie] = useState(3);
    const speed = useRef(0)
    const timer = useRef(null)
    function Nextmovie() {
        setrunmovie((old) => (old + 1) % movies.length)
    }

    function Prevmovie() {
        setrunmovie((old) => (old - 1 + movies.length) % movies.length)
    }

    function HandleWheel(e) {
        if (Math.abs(e.deltaX) < 30) return;
        speed.current += e.deltaX;
        clearTimeout(timer.current)


        timer.current = setTimeout(() => {
            if (Math.abs(speed.current) > 50) {
                if (speed.current > 0) {
                    Nextmovie();
                } else {
                    Prevmovie();
                }
            }

            speed.current = 0;
        }, 150);

    }
   useEffect(() => {

    timer.current = setTimeout(() => {
        Nextmovie();
    }, 3000);

    return () => clearTimeout(timer.current);

}, [runmovie, movies.length]);


    const currentMovie = movies[runmovie];

    return (
        <div>
            <div className="allimage"
                onWheel={HandleWheel}
            >

                <button className="prev" onClick={Prevmovie}>❮</button>

                {movies.map((pic, index) => {
                    let position = index - runmovie
                    if (position > movies.length / 2) {
                        position -= movies.length
                    }
                    if (position < -movies.length / 2) {
                        position += movies.length
                    }
                    return (
                        <img
                            className={`posters ${position === 0 ? "center" :
                                position === -1 ? "left-one" :
                                    position === -2 ? "left-two" :
                                        position === 1 ? "right-one" :
                                            position === 2 ? "right-two" :
                                                "hidden"
                                }`}
                            key={pic._id}
                            src={pic.image}
                            onClick={()=>navigate(`/details/${pic._id}`)}
                        />
                    )
                })}

                <button className="next" onClick={Nextmovie}>❯</button>

            </div>

            <div className="info">
                <h2>{currentMovie?.name}</h2>
                <p>{currentMovie?.description}</p>
            </div>

        </div>
    )
}

export default Carousel;
