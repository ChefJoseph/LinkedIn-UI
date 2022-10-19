import React, {useState} from 'react'
import styled from 'styled-components'
import Posting from './Posting'
import {articleData} from './articleData'

function Feed() {
	const [showModal, setShowModal] = useState("close");

	const handleClick = (e) => {
			e.preventDefault();
			if(e.target !== e.currentTarget) {
					return;
			}
			switch(showModal) {
				case "open":
						setShowModal("close");
						break;
				case "close":
						setShowModal("open");
						break;
				default:
						setShowModal("close");
						break;
			}
	}

  return (
		<Container id="Feed">
			<PostBox id="postbox">
				<div >
					<img className="post-icon" src="https://media-exp1.licdn.com/dms/image/D4E35AQG5Zrf0sPbMwg/profile-framedphoto-shrink_100_100/0/1664991563190?e=1666681200&v=beta&t=ZGEDtae43PZ4JjwIKWxpDEeCTqsV08zh4139BzBsmHg" alt="profile pic"/>
				<button 
					onClick = {handleClick}
					className="post-space">
					Start a post    
				</button> 
				</div>

				<div>
					<button className="noborder">
						<i >
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false" color="#378fe9">
								<path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
							</svg>
						</i>
						<span>Photo</span>
					</button>

					<button className="noborder">
						<i>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false" color="#5f9b41">
								<path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
							</svg>
						</i>
						<span>Video</span>
					</button>
					<button className="noborder">
						<i>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false" color="#c37d16">
								<path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
							</svg>
						</i>
						<span>Event</span>
					</button>
					<button className="noborder">
							<i>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false" color="#e16745">
									<path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
								</svg>
							</i>
							<span>Write article</span>
					</button>
				</div>
			</PostBox>
			<FeedContainer>
					
			{articleData.map((article, key) => (
				<Article key={key} >
						<SharedActor>
							<a>
								<img src={article.profileImg} alt="profile" />
								<div>
									<span className="username">{article.username}</span>
									<span>{article.job}</span>
									<span>{article.time}</span>
								</div>
							</a>

							<button>
									<img src="images/ellipsis.png" alt="" />
							</button>
						</SharedActor>

						<Description>{article.body}</Description>

						<SharedImage>
								<a>
										
												{/* // !article.sharedImg && article.video ? 
												//     (<ReactPlayer width = {'100%'} url={article.video} />)
												// :
												// (
												//     article.sharedImg && <img src={article.sharedImg} />
												// ) */}
												<img src= {article.bodyImg} alt="sharedimage"/>
										
								</a>
						</SharedImage>

						<SocialCounts>
								<li>
										<button>
												<img src="images/like-icon.png" alt="likes" />
												<img src="images/clap-icon.png" alt="claps" />
												<span>62</span>
										</button>
								</li>
								<li>
										<a> count-comments</a>
								</li>
						</SocialCounts>

						<SocialActions>
						<div>
					<button className="noborder">
						<i >
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
							<path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
						</svg>
	
						</i>
						<span>Like</span>
					</button>
					<button className="noborder">
						<i>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
							<path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
						</svg>
						</i>
						<span>Comment</span>
					</button>
					<button className="noborder">
						<i>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
							<path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
						</svg>
						</i>
						<span>Share</span>
					</button>
					<button className="noborder">
							<i>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
								<path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
							</svg>
							</i>
							<span>Send</span>
					</button>
				</div>
						</SocialActions>

				</Article>        
			))
	}
			</FeedContainer>

			<Posting showModal={showModal} handleClick = {handleClick} />
	</Container>
        // )
      // }
        // </>
    );
};
const Container = styled.div`

grid-area: main;

`;
const FeedContainer = styled.div`
    text-align: center;
    overflow: hidden;
		margin-top: 16px;
    margin-bottom: 8px;
		
    background-color: #fff;
		border-radius: 6px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const PostBox = styled.div`

		justify-content: space-around;
    color: #958b7b;
    margin: 0 0 16px 0;
		
    background: #fff;
		border-radius: 6px;
		position: relative;
		border: none;
		box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    div {
        button {
					cursor: pointer;
            outline: none;
            color: rgba(0,0,0,0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            
					
            display: flex;
            align-items: center;
            font-weight: 600;
            &:hover {
                background-color: rgba(0,0,0,0.07);
                border-radius: 6px;
            }
        }
				.noborder{
					border:none;
				}
        .post-space {
					cursor: pointer;
						border-width: 1px;
  					border-radius: 28px;
						border-color: rgba(0,0,0,0.3);
						font-weight: 500;
					&:hover{
						background-color: rgba(0,0,0,0.07);
					}
					&:active{
						background-color: rgba(0,0,0,0.1);
						color: #000000;
					}
        }
        .post-icon {
					cursor: pointer;
          
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px 0px 16px;
            img {
                width: 48px;
                margin-right: 8px;
                border-radius: 50%;
            }
            button {
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0,0,0,0,15);
                border-radius: 35px;
                background-color: #fff;
                text-align: left;
            }
        }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;
            button {
                svg {
									vertical-align: top;
                }
                span {
										margin-left: 8px;
                    color: #0000000E6;
										font-weight: 500;
                }
            }
        }
    }
`;

const Article = styled(FeedContainer)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;
        img {
            width: 48px;
            height: 48px;
						box-sizing: border-box;
						background-clip: content-box;
						background-color: white;
						background-position: center;
						background-size: 60%;
						background-repeat: no-repeat;
						border: 2px solid white;
						border-radius: 50%;
        }
        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span {
                text-align: left;

                &.username {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 1);
										line-height: 1.3rem;
                }
                &:nth-child(2) {
                    font-size: 12px;
										font-weight: 300;
                    color: rgba(0,0,0,0.6);
										height: 16px;
										line-height: 1rem;
                }
								&:last-child {
									font-size: 12px;
									font-weight: 300;
									color: rgba(0,0,0,0.6);
									height: 16px;
							}
            }
        }
    }
    button {
        position: absolute;
        right: 12px;
        outline: none;
        border: none;
        top: 0;
        background: transparent;
    }
`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0,0,0,1);
    font-size: 14px;
    text-align: left;
		font-weight: 300;
		line-height: 1.5;
		white-space: pre-wrap;
		
`;

const SharedImage = styled.div`
    margin-top: 8px;
    width: 100%;
	
    display: block;
    position: relative;
    background-color: #FFFFFF;
    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
				vertical-align: middle;
    }
`;

const SocialCounts = styled.ul`
    line-height: 100%;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    list-style: none;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    li {
        margin-right: 5px;
        font-size: 12px;
        button {
            display: flex;
            border: none;
            background: #fff;
        }
    }
    img {
        width: 18px;
    }
`;

const SocialActions = styled.div`
    justify-content: initial;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;

		display: grid;
		grid-auto-flow: column;
		column-gap: 25px;
		div {
			display: inline-flex;
      justify-content: space-around;
            padding-bottom: 4px;
			button {
				cursor: pointer;
					outline: none;
					color: rgba(0,0,0,0.6);
					font-size: 14px;
					line-height: 1.5;
					min-height: 48px;
					background: transparent;
					border:none;
					padding: 10px 8px;
					
				
					display: flex;
					align-items: center;
					font-weight: 600;

					svg {
						vertical-align: top;
					}
					span {
							margin-left: 3px;
							color: #0000000E6;
							font-weight: 500;
							width: 100%;
					}
					&:hover {
							background-color: rgba(0,0,0,0.07);
							border-radius: 6px;
					}

				
        }
			}
`;

const Content = styled.div`
    text-align: center;
    & > img {
        width: 30px;
    }
`;

// const mapStateToProps = (state) => {
//     return {
//         loading: state.articleState.loading,
//         user: state.userState.user,
//         articles: state.articleState.articles,
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     getArticles: () => dispatch(getArticlesAPI()),
// })

export default Feed