import React, { useState } from 'react'
import styled from 'styled-components'
import CarouselComponent from './CarouselComponent'
import { sliderData } from './sliderData'

function LandingSlider() {
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
					</ControlDiv>
					{sliderData.map((slide, index)=> {
						return (
							<CarouselComponent slide={slide} key={index} index={index} current={current}/>
						)
					})}
					
	</Carousel>
  )
}
const Carousel = styled.section`
	padding-top: 150px;
	padding-bottom: 60px;
	
`
const ControlDiv = styled.div`
	display:flex;
	justify-content: center;
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

