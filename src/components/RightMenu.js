import React, {useState} from 'react'
import styled from "styled-components";


function RightMenu() {
    const [show, setShow] = useState(false)
    
  return (
    <Container id="rightmenuContainer">
    <NewsCard>
      <Title>
        <h2>LinkedIn News</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
  <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
</svg>
      </Title>

      <FeedList>
        <ul className="slide">
              <li >
                <a href="true">
                  <span className="s1">Meta is latest Apple iMessage critic</span>
                    <span className="s2">
                      52m ago &#x2022; 13,302 readers
                    </span>
                </a>
              </li>
              <li >
                <a href="true">
                  <span className="s1">A 111-hour workweek to pay NYC rent</span>
                    <span className="s2">
                      2h ago &#x2022; 15,648 readers
                    </span>
                </a>
              </li>
              <li >
                <a href="true">
                  <span className="s1">Nashville to get $2.2B stadium</span>
                    <span className="s2">
                    36m ago &#x2022; 2,348 readers
                    </span>
                </a>
              </li>
              <li >
                <a href="true">
                  <span className="s1">Metaverse fails to spark interest</span>
                    <span className="s2">
                    2h ago &#x2022; 70,728 readers
                    </span>
                </a>
              </li>
              <li >
                <a href="true">
                  <span className="s1">Goldman Sachs in huge reshuffle?</span>
                    <span className="s2">
                    4h ago &#x2022; 60,731 readers
                    </span>
                </a>
              </li>
              {
                show?
            <>
              <li >
              <a href="true">
                <span className="s1">New COVID boosters off to slow start</span>
                  <span className="s2">4h ago &#x2022; 23,302 readers</span>
              </a>
            </li>
            <li >
              <a href="true">
                <span className="s1">Student-loan forgiveness site opens</span>
                  <span className="s2">
                    4h ago &#x2022; 25,648 readers
                  </span>
              </a>
            </li>
            <li >
              <a href="true">
                <span className="s1">Layoffs latest: Companies making cuts</span>
                  <span className="s2">
                  3h ago &#x2022; 124,348 readers
                  </span>
              </a>
            </li>
            <li >
              <a href="true">
                <span className="s1">New England to feel Europe fuel woes</span>
                  <span className="s2">
                  2h ago &#x2022; 70,728 readers
                  </span>
              </a>
            </li>
            <li >
              <a href="true">
                <span className="s1">Roblox shares pop on user growth</span>
                  <span className="s2">
                  3h ago &#x2022; 8,731 readers
                  </span>
              </a>
            </li>
            </>
                : null			
            }
            <Show onClick={()=>setShow(!show)}>{show ? 
            <i>
                <span>Show less</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                </svg>
            </i>
            : 
            <i>
                <span>Show more</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
                <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
                </svg>
            </i>
            }
            </Show>
        </ul>
      </FeedList>


    </NewsCard>
    {/* <BannerCard>
      <img
        src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
        alt=""
      />
    </BannerCard> */}
  </Container>
);
};

const Container = styled.div`

`;

const NewsCard = styled.div`
// text-align: center;
overflow: hidden;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
padding: 12px 12px 6px 12px;
`;

const Title = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
font-size: 16px;

width: 100%;
color: rgba(0, 0, 0, 0.9);
h2{
    font-weight: 500;
}

`;

const FeedList = styled.ul`
margin-top: 8px;
// height: 321px;

    ul {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #FFFFFF;
    border: none;
    list-style-type: none;
    margin-top: 8px;
    
  }
  li::before{
    margin-top:4px;
    font-size: 16px;
    content: "\\2022"; 
    color: rgba(0, 0, 0, 0.6);
    font-weight: 900;
    // display: inline;
  
  }
  li{
    display: inline-flex;

  }
  a{
    display: block;
    text-decoration: none;
    // flex-direction: column;
    cursor: pointer;
    width: 100%;
    margin-bottom: 4px;
  }
  span.s1 {
    padding-left: 12px;
    padding-right: 0;
    display: block;
    // text-align: left;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;

    color: rgba(0, 0, 0, 0.9);
    overflow: hidden;
  }

  span.s2 {
    padding-left: 12px;
    padding-right: 12px;
    overflow: hidden;
    display: block;
    // text-align: left;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
  }

`;
const Show = styled.button`
	// display: inline-flex;
	height: 24px;
	// width: 100px;
	text-align: left;
	width: fit-content;
	border: none;
	background-color: transparent;

	cursor: pointer;
i
{   
    
    display: inline-block;
    overflow: hidden;
    position: relative;
    font-style: inherit;
    font-weight: 500;
	font-size: 14px;
    min-height: 1.5rem;
    height: 20px;
    padding: 0.3rem 0.8rem 0 0.8rem;
    line height: 1.5rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
    }
& i.span{
    height: 20px;
    
}
svg{
    vertical-align: top;
    margin-left: 4px;
}
`


export default RightMenu