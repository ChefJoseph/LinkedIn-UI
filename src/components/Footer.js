import React from 'react'
import styled from 'styled-components'
function Footer() {
  return (
    <Container>
    <img src="/images/footer.png" alt="footer"></img>
    </Container>
  )
}
const Container = styled.div`

margin: auto;
width: 1128px;
padding-right: 75px;

img{
	width: 180%;
  /* Set left edge of inner element to 50% of the parent element */
  margin-left: 50%; 
  /* Move to the left by 50% of own width */
  transform: translateX(-50%); 
}`
export default Footer