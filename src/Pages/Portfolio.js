import React from "react";

function Portfolio(props) {
  return (
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
  );
}

export default Portfolio;