import React from 'react'
import styled from 'styled-components'
function Footer() {
  return (
    <Container>
      <TopicButton>Get started</TopicButton>
      <img src="/images/footer.png" alt="footer"></img>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  margin-top: 60px;
  width: 1128px;
  padding-right: 75px;

  img{
    width: 180%;
    /* Set left edge of inner element to 50% of the parent element */
    margin-left: 50%; 
    /* Move to the left by 50% of own width */
    transform: translateX(-50%); 
  }
`
const TopicButton = styled.a`
  position: absolute;
  z-index: 100;
  transform: translateY(199px) translateX(38px);
	cursor: pointer;
  text-align: center;
	align-items: center;
	height: 28px;
  width: max-content;
	padding: 12px 20px;
	color: #FFFFFF;
  border: none;
	border-radius: 28px;
	transition-duration: 200ms;
	font-size: 20px;
	font-weight: 600;
	text-align: center;
	background: #0A66C2;
	&:hover {
		background-color: #004182;
    color: #FFFFFF;
  }
`
export default Footer