import React from "react";

function RImageLText(props) {
  return (
    <div class="container portfolio">
        <div class="row h-100">
            <div class="col-lg-5 col-md-4 col-xs-12 my-auto description weather-description">
                <h4>{props.title}</h4>
                    <p>{props.description}</p>
            </div>

            <div class="col-lg-7 col-md-8 col-xs-12 weather-image">
                <img src={props.img} class="screenshot" width="100%" />
            </div>
        </div>
    </div>
  );
}

export default RImageLText;