import React from "react"

function SliderContent({activeIndex,imageSlider}) {
  return(
    <section>
{imageSlider.map((slide,index)=>(
  <div
  key={index}
  className={index === activeIndex ? "slides active" : "inactive"}>
    <img className="slide-image" src={slide.urls} alt=''/>
  </div>
))}

    </section>
  
  )
  
}

export default SliderContent;




import React from "react";
import imageSlider from '../../assets/imageSlider'


function sliderContent({activeIndex,imageSlider}) 
{return(
  <div>
  {imageSlider.map((slide,index)=>{
    <div key={index} className={activeIndex===index ? 'active' : 'inactive'}>
    <img src={imageSlider.urls} alt='' className="image"/>
    </div>
  })}
  </div>
)
  
}
export default sliderContent