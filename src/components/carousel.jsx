
import "./carousel.css"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
function Carousel({ movies }) {
    const navigate=useNavigate();
    const [runmovie, setrunmovie] = useState(3);
    const speed = useRef(0)
    const timer = useRef(null)
    const touchStartX=useRef(0)


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
  

function HandleTouchStart(e) {
    touchStartX.current = e.changedTouches[0].clientX
}

function HandleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX

    const distance = touchStartX.current - touchEndX

    if (Math.abs(distance) < 40) return

    if (distance > 0) {
        Nextmovie()
    } else {
        Prevmovie()
    }
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
                onTouchStart={HandleTouchStart}
                onTouchEnd={HandleTouchEnd}

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
                <span>{currentMovie?.name}</span>
                <p>{currentMovie?.description}</p>
            </div>

        </div>
    )
}

export default Carousel;
