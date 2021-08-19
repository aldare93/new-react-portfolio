import React from "react";
import LImageRText from "../components/Portfolio/LImageRText";
import RImageLText from "../components/Portfolio/RImageLText";


function Portfolio(props) {
  return (
    <div>
      <div className="container homepage">
          <div className="row">
              <div className="col">
                  <h1>{props.title}</h1>
                  <br />
                  <h4>The projects listed on this page are personal projects as well as group projects. Please <a href="./contact.html">contact me</a> if you have any questions about projects seen here.</h4> 
                  <h4>To see my other repsitories and projects, check out my <a href="https://github.com/aldare93">Github profile</a>.</h4>
              </div>
          </div>
      </div>

      <RImageLText 
        title={"Grademy"} 
        description={"An all in one educational platform with course options and an instant messenger application."}
        img={"/assets/grademy_screenshot.png"}
        alt={"Grademy screenshot"}
        app={"https://grademy.herokuapp.com/"}
        github={"https://github.com/aldare93/grademy"}
      />

      <LImageRText 
        title={"Photobomb"} 
        description={"With photobomb, you can save your favorite wallpapers to view later and even send to friends."}
        img={"/assets/photobomb-screenshot.png"}
        alt={"Photobomb screenshot"}
        app={"https://reddituser7777.github.io/PhotoBomb/index.html"}
        github={"https://reddituser7777.github.io/PhotoBomb"}
      />

      <RImageLText 
        title={"Weather Dashboard"} 
        description={"Search weather conditions for over 250,000 locations with a click of a button. Get real time data and a 5 day forecast."}
        img={"/assets/weather-dashboard-screenshot.png"}
        alt={"Weather dasboard screenshot"}
        app={"https://aldare93.github.io/homework-week-6/"}
        github={"https://github.com/aldare93/homework-week-6"}
      />

      <LImageRText 
        title={"Password Generator"} 
        description={"Randomly generate a secure password. Select your password criteria to generate a password for all applications."}
        img={"/assets/password-generator-screenshot.png"}
        alt={"Password generator screenshot"}
        app={"https://aldare93.github.io/homework-week-3/"}
        github={"https://github.com/aldare93/homework-week-3"}
      />
      

    </div>
  );
}

export default Portfolio;