import React from 'react'
import styled from 'styled-components'

function CarouselComponent() { 

  return (
    <CarouselContainer className="container">
							<TestimonialsLi id= "1">
								<TitleContainer>
									<h3>Let the right people know you're open to work</h3>
									<h4>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities.</h4>
								</TitleContainer>
								<SectionImg>
									<img src = "/images/opentowork.png" alt="opentowork"/>
								</SectionImg>							
							</TestimonialsLi>
							<TestimonialsLi id= "2">
								<TitleContainer>
								<h3>Conversations today could lead to opportunity tomorrow</h3>
								<h4>Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career.</h4>
								</TitleContainer>
								<SectionImg>
									<img src = "/images/opportunity.png" alt="opportunity"/>
								</SectionImg>	
							</TestimonialsLi>
							<TestimonialsLi id= "3">
								<TitleContainer>
								<h3>Stay up to date on your industry</h3>
								<h4>From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.</h4>
								</TitleContainer>
								<SectionImg>
									<img src = "/images/uptodate.png" alt="uptodate"/>
								</SectionImg>	
							</TestimonialsLi>
		</CarouselContainer>
  )
}
const CarouselContainer = styled.ul`
display: flex;
overflow-x: auto;
-webkit-overflow-scrolling: touch;
scroll-snap-points-x: repeat(1128px);
scroll-snap-type: x mandatory;
width: 1128px;
// margin-left: 5%;
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
transtions: 1s cubic-bezier(0.4, 0.5, 0.5, 1);
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
	align-items: left;
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