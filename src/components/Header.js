import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container id="HeaderContainer">
          <Content id= "Header">
            <Logo id="HeaderLogo">
              <a href="/home">
                <img src="/images/home-logo.svg" alt="" />
              </a>
            </Logo>
            <Search>
              <div>
                <input type="text" placeholder="Search" />
              </div>
              <SearchIcon>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
  <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
</svg>
              </SearchIcon>
            </Search>
            <Nav>
              <NavListWrap>
                <NavList className="active">
                  <a>
                    <img src="/images/nav-home.svg" alt="" />
                    <span>Home</span>
                  </a>
                </NavList>
    
                <NavList>
                  <a>
                    <img src="/images/nav-network.svg" alt="" />
                    <span>My Network</span>
                  </a>
                </NavList>
    
                <NavList>
                  <a>
                    <img src="/images/nav-jobs.svg" alt="" />
                    <span>Jobs</span>
                  </a>
                </NavList>
    
                <NavList>
                  <a>
                    <img src="/images/nav-messaging.svg" alt="" />
                    <span>Messaging</span>
                  </a>
                </NavList>
    
                <NavList>
                  <a>
                    <img src="/images/nav-notifications.svg" alt="" />
                    <span>Notifications</span>
                  </a>
                </NavList>
    
                <User>
                  <a>
                    <img src="https://media-exp1.licdn.com/dms/image/D4E35AQG5Zrf0sPbMwg/profile-framedphoto-shrink_100_100/0/1664991563190?e=1666681200&v=beta&t=ZGEDtae43PZ4JjwIKWxpDEeCTqsV08zh4139BzBsmHg" alt="" />
                    <span>Me
                    <img src="/images/down-icon.svg" alt="" width="12" height= "12"/>
                    </span>
                  </a>
    
                  <SignOut>
                    <a>Sign Out</a>
                  </SignOut>
                </User>
    
                <Work>
                  <a>
                    <img src="/images/nav-work.svg" alt="" />
                    <span>
                      Work
                      <img src="/images/down-icon.svg" alt="" width="12" height= "12"/>
                    </span>
                  </a>
                </Work>
                <NavList>
                  <a >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" focusable="false" >
                        <path fillRule="evenodd" clipRule="evenodd" d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z" fill="currentColor"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z" fill="currentColor" fillOpacity=".25"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z" fill="currentColor" fillOpacity=".6"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z" fill="currentColor"></path>
                    </svg>
                    <span>Learning</span>
                  </a>
                </NavList>
              </NavListWrap>
            </Nav>
          </Content>
        </Container>
      );
    };
    
    const Container = styled.div`
      background-color: white;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    //   padding: 0 30px;
      width: 100%;
			
    `;
    
    const Content = styled.div`
      display: flex;
      align-items: center;
      margin: 0 auto;
    //   min-height: 4.8rem;
      width: 100%;
      max-width: 1128px;
    `;
    
    const Logo = styled.span`
      margin-right: 8px;
      font-size: 0px;
    `;
    
    const Search = styled.div`
      opacity: 1;
      flex-grow: 1;
      position: relative;
	
      & > div {
				max-width: 280px;
        display: block;
				
        input {
          border: none;
          box-shadow: none;
          background-color: #eef3f8;
          border-radius: 2px;
          color: rgba(0, 0, 0, 0.9);
          width: 232px;
          padding: 0 8px 0 40px;
          line-height: 1.75;
          font-weight: 400;
          font-size: 14px;
          height: 34px;
          border-color: #dce6f1;
          vertical-align: text-top;
					
        }
      }
    `;
    
    const SearchIcon = styled.div`
			color: rgba(0, 0, 0, 0.6);
      width: 40px;
			height: 34px;
			padding-top: 9px;
			padding-bottom: 2px;
			padding-right: 5px;
			padding-left: 15px;
      position: absolute;
			
      z-index: 1;
			top: 0;
      border-radius: 0 2px 2px 0;
      margin: 0;
      pointer-events: none;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    
    const Nav = styled.nav`
		cursor: pointer;
      margin-left: auto;
      display: block;
			color: rgba(0, 0, 0, 0.6);
      @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        width: 100%;
      }
    `;
    
    const NavListWrap = styled.ul`
      display: flex;
      flex-wrap: nowrap;
      list-style-type: none;
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
    
    const SignOut = styled.div`
      position: absolute;
      top: 45px;
      background: white;
      border-radius: 0 0 5px 5px;
      width: 100px;
      height: 40px;
      font-size: 16px;
      transition-duration: 167ms;
      text-align: center;
      display: none;
    `;
    
    const User = styled(NavList)`
      a > svg {
        width: 24px;
        border-radius: 50%;
      }
      a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      span {
        display: flex;
        align-items: center;
      }
      &:hover {
        ${SignOut} {
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    `;
    
    const Work = styled(NavList)`
      border-left: 1px solid rgba(0, 0, 0, 0.08);
      
    `;

export default Header