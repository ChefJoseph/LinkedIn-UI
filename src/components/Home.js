import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import LeftMenu from './LeftMenu'
import Feed from './Feed'
import RightMenu from './RightMenu'

function Home() {
  return (
    <HomeContainer id="home">
			<HeaderDiv id="headerdiv">
				<Header/>
			</HeaderDiv>
			<Container id="layoutcontainer">
				<Layout id="layout">
					<LeftMenu/>
					<Feed/>
					<RightMenu/>
				</Layout>
    	</Container>
		</HomeContainer>
  )
};
const HomeContainer = styled.div`
	
`
const HeaderDiv = styled.div` 
	width: 100%;
	position: fixed;
	z-index: 1;
`
const Container = styled.div`
display: flex;
position: relative;
justify-content: center;
padding-top: 52px;
width: 100%;

`;
const Layout = styled.div`
	position: absolute;
	margin: 25px 0;
  display: grid;
	width: 1128px;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  // grid-template-row: auto; 
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;
const FixedColumn = styled.div` 


`

export default Home