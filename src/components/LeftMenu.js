import { CallConnectingDimensions } from '@styled-icons/fluentui-system-filled/CallConnecting';
import React from 'react'
import styled from "styled-components"

function LeftMenu() {
  return (
    <Container>
    <MenuCard>
      <UserInfo>
        <CardBackground />
        <a>
          <Photo src= "https://media-exp1.licdn.com/dms/image/D4E35AQG5Zrf0sPbMwg/profile-framedphoto-shrink_100_100/0/1664991563190?e=1666681200&v=beta&t=ZGEDtae43PZ4JjwIKWxpDEeCTqsV08zh4139BzBsmHg" alt="profile" />
          <Link>Joseph Hirotsu</Link>
        </a>
        <a>
          <Bio>Full Stack Engineer</Bio>
        </a>
      </UserInfo>
      <Connections>
        <a>
          <div>
            <span>Connections</span>
            <span>Grow your network</span>
          </div>
          <div> 
            <span className="bluespan"> 160 </span>
          </div>
         
        </a>
      </Connections>
      <Item>
        <span>
					<i>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false" >
						<path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
						</svg>
					</i>
          My items
        </span>
      </Item>
    </MenuCard>

    <CommunityCard id="communitycard">
			{/* <Titles> */}
				<a>
					<span className="recent">Recent</span>
				</a>

				<a>
					<span className="bluetitles">Groups</span>
				</a>

				<a>
					<span className="bluetitles">
						Events
						<i>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
							<path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
							</svg>
						</i>
					</span>
				</a>

				<a>
					<span className="bluetitles">Follow Hashtags</span>
				</a>
					<span className="discover">Discover more</span>
    </CommunityCard>
		
  </Container>
);
};

const Container = styled.div`
grid-area: leftside;
cursor: pointer;
position: sticky;
top: 76px;

`;

const MenuCard = styled.div`
text-align: center;
// overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
`;

const CardBackground = styled.div`
background: url(https://media-exp1.licdn.com/dms/image/C5616AQHY4weoJU-ALg/profile-displaybackgroundimage-shrink_200_800/0/1657633164322?e=1671667200&v=beta&t=D6CWeQNhYc2KWVSX1iS8SAqYULrmPGvUsUF1LtA22Z0);
background-position: center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;
`;

const Photo = styled.img`
box-shadow: none;
width: 72px;
height: 72px;
box-sizing: border-box;
background-clip: content-box;
background-color: white;
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
border: 2px solid white;
margin: -38px auto 12px;
border-radius: 50%;
`;

const Link = styled.div`
font-size: 16px;
line-height: 1.5;
color: rgba(0, 0, 0, 0.9);
font-weight: 600;
`;

const Bio = styled.div`
color: rgba(0, 0, 0, 0.6);
margin-top: 4px;
font-size: 12px;
line-height: 1.33;
font-weight: 400;
`;

const Connections = styled.div`

border-bottom: 1px solid rgba(0, 0, 0, 0.15);
padding-top: 12px;
padding-bottom: 12px;
& > a {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 4px 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    span {
      font-size: 12px;
      line-height: 1.333;
      font-weight: 500;
      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }
      &:nth-child(2) {
        color: rgba(0, 0, 0, 0.9);
      }
        &.bluespan{
        color: #0a66c2;
    	}
    }
		& svg {
			color: rgba(0, 0, 0, 0.9);
		}
  }
}
	
`;

const Item = styled.a`
border-color: rgba(0, 0, 0, 0.8);
text-align: left;
padding: 12px;
font-size: 12px;
font-weight: 500;
display: block;
color: rgba(0, 0, 0, 0.9);
span {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.9);
  svg {
    vertical-align: top;
    color: rgba(0, 0, 0, 0.6);
  }
  i{
    margin-right: 6px;
  }
}
&:hover {
  background-color: rgba(0, 0, 0, 0.08);
}
`;

const CommunityCard = styled(MenuCard)`
position: sticky;
top: 20px;
transition: top 667ms ease-in-out;

padding: 8px 0 0;
display: flex;
flex-direction: column;
color: rgba(0, 0, 0, 0.9);
a {

  padding: 4px 12px 4px 12px;
  font-size: 12px;
	
	color: rgba(0, 0, 0, 0.9);
  &:hover {
    color: #0a66c2;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

		&.recent{
			color: rgba(0, 0, 0, 0.9);
			font-weight: 400;
			padding-bottom: 4px;
		}
		&.bluetitles{
			color: #0a66c2;
			font-weight: 500;
			padding-bottom: 4px;
			&:hover{
				text-decoration: underline;
			}
		}
		
		& svg {
			color: rgba(0, 0, 0, 0.6);
		}
		i{
			padding-right: 20px;
		}
  }
}
.discover {
	color: rgba(0, 0, 0, 0.7);
	text-decoration: none;
	font-size: 14px;
	font-weight: 500;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding: 12px;
	text-align: center;

	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
}

`;

export default LeftMenu