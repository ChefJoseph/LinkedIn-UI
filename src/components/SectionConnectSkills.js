import React from 'react'
import LearnSkillsDropDown from './LearnSkillsDropDown'
import styled from 'styled-components'

function SectionConnectSkills() {
  return (
    <Section>
      	<TestimonialsLi>
				<TitleContainer>
          <img src = "/images/connectwithpeople.svg" alt = 'altimg'/>
					<h4>Connect with people who can help</h4>
          <TopicButton>Find people you know</TopicButton>
				</TitleContainer><TitleContainer>
          <img src = "/images/learnskills.svg" alt = 'altimg'/>
					<h4>Learn the skills you need to succeed</h4>
          <LearnSkillsDropDown/>
				</TitleContainer>
				<SectionImg>
					
				</SectionImg>							
			</TestimonialsLi>
      
    </Section>
  )
}
const Section = styled.div`
height: 916px;
width: 1128px;
padding-top: 60px;
background-color: #FFFFFF;
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
background-color: #FFFFFF;

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
    width: 456px;
    font-size: 48px;
    font-weight: 200;
    line-height: 1.25em;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    height: 312px;
    width: 312px;
  }
`;
const SectionImg = styled.div`
display: flex;
width: 50%;
align-items: flex-end;
img {
	width: 312px;
	height: 312px;
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
  const TopicButton = styled.a`
	cursor: pointer;
	box-shadow: inset 0 0 0 1px #000000E6;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
  width: max-content;
	padding: 12px 24px;
	margin: 4px 2px;
	color: #000000E6;
	border-radius: 28px;
	transition-duration: 200ms;
	font-size: 20px;
	font-weight: 600;
	text-align: center;
	background-color: transparent;
	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
		color: rgba(0, 0, 0, 0.9);
}
`
export default SectionConnectSkills