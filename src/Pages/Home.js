import React from "react";

function Home() {
  return (
    <div className="container homepage">
        <div className="row">
            <div className="col">
                <h1>Hey, I'm Alex.</h1>
                <br />
                <p>I'm an aspiring web developer, amaeteur photographer, maker of surfboards and musician.</p>
                <p>Currently, I'm employeed at <a href="http://www.atlassian.com">Atlassian</a>, an Australian software company.</p>
                <p>If you'd like, feel free to <a href="./about.html">learn more about me</a>, <a href="./resume.html">check out my resume</a>, or even <a href="./contact.html">reach out</a>. I look forward to hearing from you!</p>
             </div>
        </div>
    </div>
  );
}

export default Home;