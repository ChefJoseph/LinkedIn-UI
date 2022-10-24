import React from 'react'
import styled from 'styled-components'
import {dropdownData} from '../dataJS/dropdownData'

function LPDropDown() {
  const showDropdown = dropdownData.map((data, index)=> {
		return (
      <li key={index} >
        <a href="#">
          <span className="s1">{data.title}</span>
          <span className="s2">{data.detail}</span>
        </a>
      </li>
    )
  })

  return (
    <Section className="Section" >
      <label className="labelcontainer" htmlFor ="touch" >
        <span className="topic">
          <span >Choose a topic to learn about</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="artdeco-icon lazy-loaded" focusable="false"><path d="M5 9h14l-6.2 6.7c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3L5 9z" fill="rgba(0, 0, 0, 0.6)"></path></svg>
        </span>
      </label>
      <input type="checkbox" id="touch"></input>
      <ul className="slide" >
        {showDropdown}
      </ul>
    </Section> 
  )
}

const Section = styled.div`
  margin-top: 40px;
  height: 60px;
  width: 360px;

  .labelcontainer{
  width: 100%;
  }
  #touch {
    position: absolute;
    width: 360px;
    height: 0 px;
    opacity: 0;

  }

  #touch: checked + .slide {
    height: 382px;
    width: 355px;
    z-index: 100;
    opacity: 1;
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
  .slide {
    width: 100%;
    height: 0px;
    overflow: hidden;
    text-align: left;
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
    padding-top: 16px;
    padding-left: 16px;
    display: list-item;
    width: 338px;
  }
  .s1 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    color: rgba(0, 0, 0, 0.9);

  }
  .s2 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
    color: rgba(0, 0, 0, 0.6);
    
  }
  a {
    display: flex;
    color: #0000000;
    flex-direction: column;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

`
export default LPDropDown