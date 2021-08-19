import React from "react";

function LImageRText(props) {
  return (
    <div className="container portfolio">
        <div className="row h-100">
            <div className="col-lg-7 col-md-8 col-xs-12">
                <img src={props.img} alt={props.alt} className="screenshot" width="100%" />
            </div>
  
            <div className="col-lg-5 col-md-4 col-xs-12 my-auto description">
                <h4>{props.title}</h4>
                    <p>{props.description}</p>
            </div>
        </div>
    </div>
  );
}

export default LImageRText;