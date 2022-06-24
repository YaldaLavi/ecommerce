import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Arrows({prevSlide , nextSlide}){
    return(
        <div className="arrow">
        <span className="prev" onClick={prevSlide}> 
       <ArrowBackIosIcon fontSize="large"/>
        </span>
        <span className="next" onClick={nextSlide}>
         <ArrowForwardIosIcon fontSize="large"/>
         </span>
        </div>
    )
}
export default Arrows