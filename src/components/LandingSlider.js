import React from 'react'
import styled from 'styled-components'

function LandingSlider() {
// 	var tLeftButton = $("#testimonials-l");
// var tRightButton = $("#testimonials-r");

// // Get number of <li> elements in carousel

// var tItemCount = document.getElementById('testimonials-ul').querySelectorAll('li').length;

// // Set length based on that

// var tWidth = tItemCount * 100 + "vw";
// $(".testimonials ul").css("width", tWidth);

// // Button functionality

// var tPosition = 0;
// console.log(tPosition);

// tRightButton.click(function() {
//   if (tPosition < (tItemCount - 1)) {
//     tPosition++;
//     var m = "-" + (100 * tPosition) + "vw";
//     $(".testimonials ul").animate({
//       "left": m
//     }, 500);
//     greyButton();
//   }
// });

// tLeftButton.click(function() {
//   if (tPosition > 0) {
//     tPosition--;
//     var m = "-" + (100 * tPosition) + "vw";
//     $(".testimonials ul").animate({
//       "left": m
//     }, 500);
//     greyButton();
//   }
// });

// // Grey out buttons if not useable 

// var greyButton = function() {
//   if (tPosition == 0) {
//     tLeftButton.css("opacity", "0.3");
//     tLeftButton.css("cursor", "default");
//   } else if (tPosition == (tItemCount - 1)) {
//     tRightButton.css("opacity", "0.3");
//     tRightButton.css("cursor", "default");
//   } else {
//     tRightButton.css("opacity", "1");
//     tRightButton.css("cursor", "pointer");
//     tLeftButton.css("opacity", "1");
//     tLeftButton.css("cursor", "pointer");
//   }
// }

// greyButton();

// // And finally, if there's only one quote, kill the buttons altogether

// if ( tItemCount == 1 ) {
//   $('.testimonials-control').css('display','none');
// }

  return (
    <SectionSlide>
				<TitleSlide>
				<Testimonials>
    <ul>
      <li>
        <p>Hashtag bespoke YOLO, put a bird on it hammock polaroid wayfarers tattooed neutra squid lumbersexual meh humblebrag VHS. Cred tumblr cold-pressed messenger bag small batch trust fund, mustache next level. Keytar swag kogi viral waistcoat flexitarian.</p>
        <small>Some dude</small>
      </li>
      <li>
        <p>Readymade fashion axe chia, deep v photo booth gochujang jean shorts asymmetrical XOXO you probably haven't heard of them locavore heirloom kale chips dreamcatcher. </p>
        <small>Some guy</small>
      </li>
      <li>
        <p>Put a bird on it austin jean shorts direct trade cornhole, sriracha street art. Keytar craft beer kitsch polaroid, affogato tofu vinyl butcher.</p>
        <small>Some other guy</small>
      </li>
      <li>
        <p>Hashtag bespoke YOLO, put a bird on it hammock polaroid wayfarers tattooed neutra squid lumbersexual meh humblebrag VHS. Cred tumblr cold-pressed messenger bag small batch trust fund, mustache next level. Keytar swag kogi viral waistcoat flexitarian.</p>
        <small>Some dude</small>
      </li>
    </ul>
  </Testimonials>
  <TestimonialsControl>
    <i id="testimonials-l"></i>
    <i id="testimonials-r"></i>
  </TestimonialsControl>
				</TitleSlide>
	</SectionSlide>
  )
}
const SectionSlide = styled.section`
  display: flex;
  align-content: start;
  padding-top: 60px;
	padding-bottom: 60px;
  position: relative;
	justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1128px;
  margin: auto;
	background-color: #f8f2ec;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }

`;

const TitleSlide = styled.div`
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
    color: #8F5849;
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
const Testimonials = styled.div`
background-color: #e8e8e5;
overflow: hidden;
width: 100%;
ul {
	list-style: none;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 0;
}
ul, li {
  display: inline-block;
  padding: 1rem;
  position: relative;
  text-align: center;
  width: 100vw;
}
ul, li, p {
  max-width: 600px;
  margin: 1rem auto;
  width: 50%;
}
`
const TestimonialsControl = styled.div`
background-color: rgba(255,255,255,0.2);
display: flex;
justify-content: center;
i{
	cursor: pointer;
  padding: 1.3rem;
}
`
export default LandingSlider

