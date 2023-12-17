import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [curIndex,setIndex]=useState(0);

    const goToPrevSlide=()=>{
        setIndex((prev)=>(prev-1+images.length)%images.length);
    }
    const goToNextSlide=()=>{
        setIndex((prev)=>(prev+1)%images.length)

    }

    return(
        <>
            <div className="carousel-container">
                <ArrowBackIosIcon className="arrow-icon" onClick={goToPrevSlide} />
                <div className="carousel-content">
                    <h2>{images[curIndex].title}</h2>
                    <p>{images[curIndex].subtitle}</p>
                    <img src={images[curIndex].img} alt={images[curIndex].title} />

                </div>
                <ArrowForwardIosIcon className="next" onClick={goToNextSlide} />

            </div>
        </>
    )
}

export default Carousel;