import React from 'react'
import styled from 'styled-components'

function LearnSkillsDropDown() {
  return (
    <Section>
      <label htmlFor ="touch">
        <span className="topic">
          <span>Choose a topic to learn about</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="artdeco-icon lazy-loaded" focusable="false"><path d="M5 9h14l-6.2 6.7c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3L5 9z" fill="rgba(0, 0, 0, 0.6)"></path></svg>
        </span>
      </label>
      
      <input type="checkbox" id="touch"></input>
      

          <ul className="slide">
              <li >
                <a >
                  <span >Training and Education</span>
                    <span >
                      290+ courses
                    </span>
                </a>
              </li>
              <li>
                <a >
                  <span >IT Help Desk</span>
                    <span >
                      300+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Business Analysis and Strategy</span>
                    <span >
                      780+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Career Development</span>
                    <span >
                      430+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Finance and Accounting</span>
                    <span >
                      270+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Leadership and Management</span>
                    <span >
                      1,200+ course
                    </span>
                </a>
              </li>
              <li>
                <a >
                  <span >Mobile Development</span>
                    <span >
                      460+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Marketing</span>
                    <span >
                      780+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Cloud Computing</span>
                    <span>
                      870+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Project Management</span>
                    <span >
                      380+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Visualization and Real-Time</span>
                    <span >
                      1,200+ course
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Animation and Illustration</span>
                    <span >
                      1,600+ course
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Audio and Music</span>
                    <span >
                      410+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >AEC</span>
                    <span >
                      1,400+ course
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Graphic Design</span>
                    <span >
                      900+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Motion Graphics and VFX</span>
                    <span>
                      890+ courses
                    </span>
                </a>
              </li>
              <li>
                <a >
                  <span >Photography</span>
                    <span >
                      1,100+ course
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span>Video</span>
                    <span >
                      590+ courses
                    </span>
                </a>
              </li>
              <li>
                <a >
                  <span >Data Science</span>
                    <span >
                      830+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Network and System Administration</span>
                    <span >
                      1,100+ course
                    </span>
                </a>
              </li>
              <li>
                <a >
                  <span >Software Development</span>
                    <span >
                      1,800+ course
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >User Experience</span>
                    <span >
                      470+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Web Design</span>
                    <span >
                      520+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Database Management</span>
                    <span >
                      290+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Web Development</span>
                    <span >
                      1,300+ course
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Product and Manufacturing</span>
                    <span >
                      1,400+ course
                    </span>
                </a>
              </li>
              <li >
                <a>
                  <span >Sales</span>
                    <span >
                      220+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Human Resources</span>
                    <span >
                      430+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >DevOps</span>
                    <span>
                      220+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Small Business and Entrepreneurship</span>
                    <span >
                      320+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Customer Service</span>
                    <span>
                      170+ courses
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Professional Development</span>
                    <span >
                      1,200+ course
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Business Software and Tools</span>
                    <span >
                      1,800+ course
                    </span>
                </a>
              </li>
              <li >
                <a >
                  <span >Security</span>
                    <span >
                      590+ courses
                    </span>
                </a>
              </li>
          </ul>
    </Section>
  )
}

const Section = styled.div`
margin-top: 40px;
height: 60px;
width: 360px;
a {
  text-decoration: none;
  color: #0000000;

}
nav{

}

.topic {
  padding: 16px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  height: 20px;
  border-style: solid;
	border-color: rgba(0, 0, 0, 0.16);
	border-width: 1px;
	border-radius: 5px;
&:hover{
  background-color: rgba(0, 0, 0, 0.04);
	color: rgba(0, 0, 0, 0.9);
}
}
.topic::after {
  height: 60px;
  width: 90%%;
  float: right;
  right: 10%;
  
}
.slide {
  width: 100%;
  height: 0px;
  overflow: hidden;
  text-align: left;
  // transition: height .4s ease;
  position: absolute;
  background-color: #FFFFFF;
  overflow: scroll;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  border: solid;
  border-color: #FFFFFF;
  border-radius: 8px;
  opacity: 0;
}
.slide li {
  padding: 16px;

}
#touch {
  position: absolute;
  height: 60px;
  opacity: 0;

}

#touch:checked + .slide {
  height: 450px;
  width: 355px;
  z-index: 100;
  opacity: 1;
}
`
export default LearnSkillsDropDown