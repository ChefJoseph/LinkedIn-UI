import React, {useState} from 'react'
import styled from 'styled-components'
import LandingSlider from './LandingSlider'
import SectionConnectSkills from './SectionConnectSkills'


function LandingSections () {
	const [show, setShow] = useState(false)

	return(
		<SectionContainer>
			<Section>
				<Title>
						<h2>Explore topics you are interested in</h2>
				</Title>
				<SectionBody>
						<h4>CONTENT TOPICS</h4>
						<TopicContainer>
							<TopicButton>See All Topics</TopicButton>
							<TopicButton>Workplace</TopicButton>
							<TopicButton>Job Search</TopicButton>
							<TopicButton>Careers</TopicButton>
							<TopicButton>Interviewing</TopicButton>
							<TopicButton>Salary and Compensation</TopicButton>
							<TopicButton>Internships</TopicButton>
							<TopicButton>Employee Benefits</TopicButton>
						</TopicContainer>
				</SectionBody>
			</Section>
			<SectionWhite>
			<SectionJob>
				<Title>
						<h2>Find the right job or internship for you</h2>
				</Title>
				<SectionBody>
						<h4>SUGGESTED SEARCHES</h4>
						<TopicContainer>
							<TopicButton>Engineering</TopicButton>
							<TopicButton>Business Development</TopicButton>
							<TopicButton>Finance</TopicButton>
							<TopicButton>Administrative Assistant</TopicButton>
							<TopicButton>Retail Associate</TopicButton>
							<TopicButton>Customer Service</TopicButton>
							<TopicButton>Operations</TopicButton>
							<TopicButton>Information Technology</TopicButton>
							<TopicButton>Marketing</TopicButton>
							<TopicButton>Human Resources</TopicButton>
							{
								show?
								<TopicContainer>
								<TopicButton>Healthcare Service</TopicButton>
								<TopicButton>Sales</TopicButton>
								<TopicButton>Program and Project Management</TopicButton>
								<TopicButton>Accounting</TopicButton>
								<TopicButton>Arts and Design</TopicButton>
								<TopicButton>Community and Social Services</TopicButton>
								<TopicButton>Consulting</TopicButton>
								<TopicButton>Education</TopicButton>
								<TopicButton>Entrepreneurship</TopicButton>
								<TopicButton>Legal</TopicButton>
								<TopicButton>Media and Communnications</TopicButton>
								<TopicButton>Military and Protective Services</TopicButton>
								<TopicButton>Product Management</TopicButton>
								<TopicButton>Purchasing</TopicButton>
								<TopicButton>Quality Assurance</TopicButton>
								<TopicButton>Real Estate</TopicButton>
								<TopicButton>Research</TopicButton>
								<TopicButton>Support</TopicButton>
								<TopicButton>Administrative</TopicButton>
								</TopicContainer>
								: null			
							}
							<Show onClick={()=>setShow(!show)}>{show ? "Show less ∧" : "Show more ∨"}</Show>
						</TopicContainer>
				</SectionBody>
			</SectionJob>
			</SectionWhite>
			<SectionBeige>
				<SectionPost>
					<Title>
							<h3>Post your job for millions of people to see</h3>
					</Title>
					<SectionBody>
							<TopicContainer>
								<TopicButton>Post a job</TopicButton>
							</TopicContainer>
					</SectionBody>
				</SectionPost>
			</SectionBeige>
			<LandingSlider/>
			<SectionConnectSkills/>
		</SectionContainer>
	)
}

const SectionContainer= styled.div`
	padding: 0px;
	background-color: #f5f5f5;
`;
const Section = styled.section`
  display: flex;
  align-content: start;
  padding-top: 60px;
	padding-bottom: 60px;
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
`;
const SectionWhite = styled.div`
width: 100%;
background-color: #FFFFFF;
`
const SectionBeige= styled.div`
width: 100%;
background-color: #f9f2ed;
`

const SectionJob = styled.section`
  display: flex;
  align-content: start;
  padding-top: 60px;
	padding-bottom: 60px;
  position: relative;
	justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1128px;
	height: 375px;
  margin: auto;
	background-color: #FFFFFF;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
const SectionPost = styled.section`
  display: flex;
  align-content: start;
  padding-top: 60px;
	padding-bottom: 60px;
  position: relative;
	justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1128px;
  margin: auto;
	background-color: #f9f2ed;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Title = styled.div`
	width: 40%;
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
    padding-bottom: 0;
    width: 412px;
    font-size: 40px;
    color: #b24020;
    font-weight: 400;
    line-height: 60px;

    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

`;

const SectionBody = styled.div`
	width: 55%;
h4 {
	padding-bottom: 0;
	width: 408px;
	font-size: 16px;
	color: #000000E6;
	font-weight: 500;
	line-height: 60px;

	@media (max-width: 768px) {
		text-align: center;
		font-size: 20px;
		width: 100%;
		line-height: 2;
	}
}`
const TopicContainer = styled.div`
	width: 100%;
	display: flex;
  flex-wrap: wrap;
	align-items: center;

`
const TopicButton = styled.a`
	cursor: pointer;
	box-shadow: inset 0 0 0 1px #000000E6;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	padding: 12px 24px;
	margin: 4px 2px;
	color: #000000BF;
	border-radius: 28px;
	transition-duration: 200ms;
	font-size: 20px;
	font-weight: 600;
	text-align: center;
	background-color: transparent;
	border-color: rgba(0, 0, 0, 0.6);
	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
		color: rgba(0, 0, 0, 0.9);
}
`
const Show = styled.button`
	display: inline-flex;
	height: 24px;
	width: 24px;
	text-align: left;
	width: fit-content;
	border: none;
	background-color: transparent;
	font-weight: 400;
	font-size: 16px;
	padding-right: 400px;
	padding-top: 12px;
	padding-bottom: 20px;
	cursor: pointer;
`
export default LandingSections
