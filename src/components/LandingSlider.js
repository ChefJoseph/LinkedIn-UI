import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
// import CarouselComponent from './CarouselComponent'
import { sliderData } from '../dataJS/sliderData'

function LandingSlider() {
	const [scrollWidth, setScrollWidth] = useState(0)
	
	const showCaseRef = useRef()
	const tLeftButton = useRef()
	const tRightButton = useRef()

	  // scroll to left
	function scrollLeft() {
		if (scrollWidth > 0) {
			const left = scrollWidth - 1128
			showCaseRef.current.style.transform = `translate(-${left}px)`
			setScrollWidth(left)
		}
		console.log(showCaseRef.current.style.transform, "scrollLeft funct")
	};
		  // scroll to right
	function scrollRight() {
		if (scrollWidth < showCaseRef.current.scrollWidth - 1128) {
			const right = scrollWidth + 1128
			showCaseRef.current.style.transform = `translate(-${right}px)`
			setScrollWidth(right)
		}
		console.log(showCaseRef.current.style.transform, "scrollRight funct")
	};

	const showCarousel = sliderData.map((slide, index)=> {
		return (
			<TestimonialsLi key={index}>
				<TitleContainer>
					<h3>{slide.h3}</h3>
					<h4>{slide.h4}</h4>
				</TitleContainer>
				<SectionImg>
					<img src = {slide.image} alt = 'altimg'/>
				</SectionImg>							
			</TestimonialsLi>	
		)		
	})
	//re-render useRef for current.style
	useEffect (() =>{
		if (scrollWidth === 0) {
					tLeftButton.current.style.opacity ='0.3';
					tLeftButton.current.style.cursor ='not-allowed';
				} else if (scrollWidth === 2256) {
					tRightButton.current.style.opacity ='0.3';
					tRightButton.current.style.cursor ='not-allowed';
				} else {
					tRightButton.current.style.opacity ='1';
					tRightButton.current.style.cursor ='pointer';
					tLeftButton.current.style.opacity ='1';
					tLeftButton.current.style.cursor ='pointer';
				}
	})

  return (
		<Carousel>
			<ControlDiv>
			<TestimonialsControl >
				<button className="b1" onClick={scrollLeft} ref={tLeftButton} >
					<i>
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon lazy-loaded" focusable="false">
						<path d="M10,12l6,8.94L14.45,22,8.26,12.85a1.5,1.5,0,0,1,0-1.69L14.45,2,16,3.06Z" className="large-icon"></path>
					</svg>
					</i>
					<span>Previous</span>
				</button>
				<button className="b2" onClick={scrollRight} ref={tRightButton} >
					<span>Next</span>
					<i>
					<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon lazy-loaded" focusable="false">
					<path d="M14,12L8,3.06,9.55,2l6.19,9.15a1.5,1.5,0,0,1,0,1.69L9.55,22,8,20.94Z" className="large-icon" ></path>
					</svg>
					</i>
				</button>
			</TestimonialsControl>
			<CarouselContainer ref={showCaseRef} tabIndex={0}>
			{showCarousel}
			</CarouselContainer>
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
	display: block;
	// position: relative;
	// display: column;
	width: 1128px;
	overflow: hidden;
	box-sizing: border-box;
`
const TestimonialsControl = styled.div`
	background-color: #f5f5f5;
	display: flex;
	justify-content: right;
	text-align: center;
	padding-top: 20px;
	width: 100%;
	

	button{
	margin: 0px 8px;
	padding: 0px 4px;
	height: 40px;
	border: none;
	background-color: transparent;
	font-weight: 400;
	font-size: 14px;
	cursor: pointer;
	border-radius: 28px;
	align-items: center;
	&:hover{
		background-color: rgba(0, 0, 0, 0.04);
		color: rgba(0, 0, 0, 0.9);
	}
	}
	.b1{
		width: 116px;
	}
	.b2{
		width: 89px;
	}	
i{
	cursor: pointer;
	vertical-align: middle
}
`

const CarouselContainer = styled.ul`
display: flex;
transform: translate(0px);
transition-duration: 350ms;
transition-property: all;
transition-timing-function: cubic-bezier(0.34, 0, 0.21, 1);

align-items: stretch;
width: 1128px;

-webkit-overflow-scrolling: touch;

li {
	text-align: left;
  scroll-snap-align: center;
  flex: none;
	flex-shrink: 0;
	width: 1128px;
	height: 450px;

}
`
const TestimonialsLi = styled.li`

display: flex;
align-content: start;
padding-top: 15px;
padding-bottom: 10px;
position: relative;
justify-content: space-between;
flex-wrap: wrap;
width: 1108px;
margin: auto;
background-color: #f5f5f5;

@media (max-width: 768px) {
	margin: auto;
	min-height: 0px;
}
`
const TitleContainer = styled.div`
	display: block;
	align-items: center;
	width: 50%;
	padding-top: 90px;
	
  h2 {
    padding-bottom: 0;
    width: 408px;
    font-size: 48px;
    color: #000000E6;
    font-weight: 200;
    line-height: 60px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
	h3 {
    padding-bottom: 10px;
    width: 100%;
    font-size: 40px;
    color: #8F5849;
    font-weight: 400;
    line-height: 1.25em;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
	h4 {
    padding-bottom: 0;
    width: 100%;
    font-size: 32px;
    font-weight: 200;
    line-height: 1.25em;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
`;
const SectionImg = styled.div`
display: flex;
width: 44%;
align-items: flex-end;
img {
	width: 450px;
	height: 450px;
	display: block;
	position: relative;
	flex-shrink: 1;
	bottom: -2px;
	@media (max-width: 768px) {
		top: 230px;
		width: 400px;
		position: static;
		height: 214px;
		flex-shrink: 1;
	}
	`
export default LandingSlider

