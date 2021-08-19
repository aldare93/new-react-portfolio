import React from "react";

function Contact(props) {
  return (
    <div className="container homepage">
        <div className="row">
            <div className="col">
                <h1>{props.title}</h1>
                <br />
                <p>If you'd like to discuss my projects or have any questions, you can email me at <a href="mailto:alexdare93@gmail.com">alexdare93@gmail.com</a>. Additionally, you can connect with me on <a href="https://www.linkedin.com/in/darealex/">Linkedin</a>.</p>
             </div>
        </div>
    </div>
  );
}

export default Contact;