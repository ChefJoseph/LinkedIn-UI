import React from 'react'
import styled from 'styled-components'

function CarouselComponent( {slide, index, current}) {

  return (
    <CarouselContainer>
			{index === current && (
			<TestimonialsLi>
				<TitleContainer>
					<h3>{slide.h3}</h3>
					<h4>{slide.h4}</h4>
				</TitleContainer>
				<SectionImg>
					<img src = {slide.image} alt = 'altimg'/>
				</SectionImg>							
			</TestimonialsLi>
			)}					
	</CarouselContainer>
  )
}

const CarouselContainer = styled.ul`
display: flex;
overflow-x: auto;
// scroll-behavior: smooth;
// transition: background-position 1500ms ease-out;


-webkit-overflow-scrolling: touch;
scroll-snap-points-x: repeat(1128px);
scroll-snap-type: x mandatory;
width: 1128px;
margin-left: 5%;
overflow: hidden;
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
max-width: 1128px;
margin: auto;
background-color: #f5f5f5;

@media (max-width: 768px) {
	margin: auto;
	min-height: 0px;
}
ul {
	list-style: none;
  position: relative;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  padding: 0;
}
ul, li {
  display: inline-block;
  padding: 1rem;
  position: relative;
  text-align: stretch;
  width: 100%;
	max-width: 560px;
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
export default CarouselComponent