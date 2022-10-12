import React, { useState } from 'react'
import styled from 'styled-components'
import CarouselComponent from './CarouselComponent'
import { sliderData } from './sliderData'

function LandingSlider() {
// 	var tLeftButton = $("#testimonials-l");
// var tRightButton = $("#testimonials-r");

// // Get number of <li> elements in carousel

// var tItemCount = document.getElementById('testimonials-ul').querySelectorAll('li').length;

// // Set length based on that

// var tWidth = tItemCount * 100 + "vw";
// $(".testimonials ul").css("width", tWidth);

// // Button functionality

// var tPosition = 0;
// console.log(tPosition);

// tRightButton.click(function() {
//   if (tPosition < (tItemCount - 1)) {
//     tPosition++;
//     var m = "-" + (100 * tPosition) + "vw";
//     $(".testimonials ul").animate({
//       "left": m
//     }, 500);
//     greyButton();
//   }
// });

// tLeftButton.click(function() {
//   if (tPosition > 0) {
//     tPosition--;
//     var m = "-" + (100 * tPosition) + "vw";
//     $(".testimonials ul").animate({
//       "left": m
//     }, 500);
//     greyButton();
//   }
// });

// // Grey out buttons if not useable 

// var greyButton = function() {
//   if (tPosition == 0) {
//     tLeftButton.css("opacity", "0.3");
//     tLeftButton.css("cursor", "default");
//   } else if (tPosition == (tItemCount - 1)) {
//     tRightButton.css("opacity", "0.3");
//     tRightButton.css("cursor", "default");
//   } else {
//     tRightButton.css("opacity", "1");
//     tRightButton.css("cursor", "pointer");
//     tLeftButton.css("opacity", "1");
//     tLeftButton.css("cursor", "pointer");
//   }
// }

// greyButton();

// // And finally, if there's only one quote, kill the buttons altogether

// if ( tItemCount == 1 ) {
//   $('.testimonials-control').css('display','none');
// }
	// const data = ["1", "2", "3"]
	// const [currentIndex, setCurrentindex] = useState(0)
	const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  return (
    <Carousel>
					<ControlDiv>
					<TestimonialsControl>
						<button onClick={prevSlide}>
							<img src="https://img.icons8.com/ios/24/000000/back.png" alt="prev"/>
							<span>Previous</span>
						</button>
						<button onClick={nextSlide}>
							<span>Next</span>
							<img src="https://img.icons8.com/ios/24/000000/forward.png" alt="next"/>
						</button>
					</TestimonialsControl>
					<CarouselComponent />
					</ControlDiv>
	</Carousel>
  )
}
const Carousel = styled.section`
display: flex;
	padding-top: 150px;
	padding-bottom: 150px;
	justify-content: center;
	
`
const ControlDiv = styled.div`
	display: column;
	
`
const TestimonialsControl = styled.div`
	background-color: rgba(255,255,255,0.2);
	display: flex;
	justify-content: right;
	text-align: center;
	padding-top: 20px;
	width: 1129px;

	button{
	height: 40px;
	width: 95px;
	border: none;
	background-color: transparent;
	font-weight: 400;
	font-size: 14px;
	cursor: pointer;
	border-radius: 28px;

&:hover{
	background-color: rgba(0, 0, 0, 0.04);
	color: rgba(0, 0, 0, 0.9);
}
}
img{
	cursor: pointer;
	vertical-align: middle
}
`
export default LandingSlider

