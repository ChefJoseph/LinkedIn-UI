import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import LandingSections from './LandingSections'
import Footer from './Footer'

function LandingPage() {
  return (
    <Container>
			<Nav>
				<a href ="/"  >
					<img src ="/images/login-logo.svg" alt=""/>
				</a>
				<NavListWrap>
					<NavList>
						<a >
							<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" focusable="false" >
								<path d="M18.07 2.93A10 10 0 1 0 3.926 17.07 10 10 0 0 0 18.07 2.93ZM5.34 15.66A8 8 0 1 1 16.66 4.353 8 8 0 0 1 5.34 15.66ZM9 8l-3 7a7 7 0 1 1 9.9-9.9L9 8Zm1.12 2.88a1.24 1.24 0 1 1 1.76-1.747 1.24 1.24 0 0 1-1.76 1.747ZM15.95 15A7 7 0 0 1 6 15l7-3 2.95-6.95a7 7 0 0 1 0 9.95Z" fill="currentColor"></path>
							</svg>
							<span>Discover</span>
						</a>
					</NavList>
					<NavList>
						<a >
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" focusable="false" >
								<path d="M9 14v6H0v-6c0-1.7 1.3-3 3-3h3c1.7 0 3 1.3 3 3Zm5.5-3c1.9 0 3.5-1.6 3.5-3.5S16.4 4 14.5 4 11 5.6 11 7.5s1.6 3.5 3.5 3.5Zm1 2h-2c-1.4 0-2.5 1.1-2.5 2.5V20h7v-4.5c0-1.4-1.1-2.5-2.5-2.5ZM4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0Z" fill="currentColor"></path>
							</svg>
							<span>People</span>
						</a>
					</NavList>
					<NavList>
						<a >
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="none" focusable="false" >
								<path fillRule="evenodd" clipRule="evenodd" d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z" fill="currentColor"></path>
								<path fillRule="evenodd" clipRule="evenodd" d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z" fill="currentColor" fillOpacity=".25"></path>
								<path fillRule="evenodd" clipRule="evenodd" d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z" fill="currentColor" fillOpacity=".6"></path>
								<path fillRule="evenodd" clipRule="evenodd" d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z" fill="currentColor"></path>
							</svg>
							<span>Learning</span>
						</a>
					</NavList>
					<NavList>
						<a >
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" focusable="false" >
								<path d="M15 4V3c0-1.7-1.3-3-3-3H8C6.3 0 5 1.3 5 3v1H0v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V4h-5ZM7 3c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H7V3Zm10 9c1.2 0 2.3-.5 3-1.4V15c0 1.7-1.3 3-3 3H3c-1.7 0-3-1.3-3-3v-4.4c.7.9 1.8 1.4 3 1.4h14Z" fill="currentColor"></path>
							</svg>
							<span>Jobs</span>
						</a>
					</NavList>
					<div>
						<Join>Join now</Join>
						<SignIn>Sign in</SignIn>
					</div>
				</NavListWrap>
			</Nav>
      <Section>
				<Hero>
					<h1>Welcome to your professional community</h1>
					<LoginForm autocomplete="off">
						<LoginInputContainer autocomplete="off">
							<LoginInputBox>
								<InputField type="text" autoComplete="off" id="user" placeholder=" "/>
								<InputLabel htmlFor="user">Email or phone number</InputLabel>
							</LoginInputBox>	
							<LoginInputBox>
								<InputField type="password" autoComplete="off" id="password" placeholder=" "/>
								<InputLabel htmlFor="password">Password</InputLabel>
							</LoginInputBox>
						</LoginInputContainer>
						<a >Forgot password?</a>
						<SignInButton>
							<Link to="/home">Sign up</Link>
						</SignInButton>
						
						<Google>
							<img src="/images/google.svg" alt="" />
								Sign in with Google
						</Google>
					</LoginForm>
				</Hero>
      	<SectionImg>
          <img src="/images/LinkedInLanding1.png" alt="" />
      	</SectionImg>
      </Section>
			<LandingSections/>
			<Footer/>
    </Container>
  )
}

const Container = styled.div`
	// padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
	margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
	color: rgba(0, 0, 0, 0.6);
	
	& > a {
  width: 135px;
  height: 34px;
  @media (max-width: 768px) {
    padding: 0 5px;
  }
	}
`
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
	align-items: center;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
		cursor: pointer;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
	font-weight: 600;
  padding: 16px 25px;
  text-decoration: none;
  border-radius: 28px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
	cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0A66C2;
  border-radius: 28px;
  transition-duration: 200ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 16px 25px;
  text-align: center;
	cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.08);
    color: #0a66c2;
  }
	
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 560px;
	padding-top: 40px;
  padding-bottom: 0px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
	background-color: #FFFFFF;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
	width: 55%;
	
  h1 {
   
    width: 100%;
    font-size: 56px;
    color: #8f5849;
		height: 134px;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
`;
const LoginForm = styled.form`
  margin-top: 24px;
  width: 408px;
	margin-bottom: 16px;
	display: block;
	position: relative;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
	a {
		cursor: pointer;
		textDecoration: none;
		 color: #000000E6; 
		 margin: 300px 0px 24px 0;

	}
`;
const LoginInputContainer =styled.div`
	display: flex;
	flex-flow: wrap;
	position: relative;
	height: 120px;
	margin-bottom: 20px;

	// box-sizing: border-box;

	@media (max-width: 768px) {
		min-width: 70px;
	}
	
`;

const LoginInputBox = styled.div`
	width: 100%;
	position: relative;
	margin-top: 12px;
	display: flex;
	box-sizing: border-box;
	font-weight: 400;
	line-height: 1.5;

`
const InputField = styled.input` 
	font-size: 1em;

	line-height: 1.5;
	font-weight: 400;
	color: rgba(0,0,0,0.9);
	height: 48px;
	width: 100%;
	border: 1px solid rgba(0,0,0,0.6);
	border-radius: 2px;
	padding: 20px 12px 4px;
	box-sizing: border-box;
	vertical-align: middle;
	writing-mode: horizontal-tb;
	display: inline-block;
	text-align: start;
	placeholder-shown: none;

	&:focus ~ label,
	:not(:placeholder-shown, :focus) ~label{
		transform: translateY(-5%);
		font-size: 12px;
		line-height: 1.333;
		padding-top: 8px;
		transition-delay: 0s;
		outline: none;
	}
`
const InputLabel = styled.label` 
position: absolute;
	box-sizing: border-box;
height: 48px;
width: 100%;
font-size: 1em;
line-height: 1.5;
font-weight: 400;
color: rgba(0,0,0,0.6);
padding: 12px;

transition: all .2s ease-in-out;
pointer-events: none;


`
const SignInButton = styled.button`
  display: flex;
  justify-content: center;
	align-items: center;
  background-color: #2977C9;
	border: none;
	color: white;
  height: 56px;
  width: 100%;
  border-radius: 28px;
	margin-top: 20px;
	margin-bottom: 40px;
	cursor: pointer;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  // font-size: 20px;
  // color: #FFFFFF;
  &:hover {
    background-color: #006699;
    color: #FFFFFF;
  }
	a{
		margin: 0px;
		font-size: 20px;
		color: #FFFFFF;
		text-decoration: none;
		height: 56px;
		width: 100%;
		padding-top: 40px;
		text-align: center;
		line-height: 1em;
	}

`;
const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
	border-width: 1px;
  border-radius: 28px;
	border-color: #00000099;
	margin-top: 15px;
	margin-bottom: 15px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
	img{
		padding-right: 25px;
	}
`;
const SectionImg = styled.div`
display: flex;
width: 44%;
align-items: flex-end;
img {
	width: 500px;
	height: 500px;
	display: block;
	position: relative;
	flex-shrink: 1;
	bottom: -2px;
	// padding-top: 100px;
	@media (max-width: 768px) {
		top: 230px;
		width: 400px;
		position: static;
		height: 214px;
		flex-shrink: 1;
	}`
export default LandingPage