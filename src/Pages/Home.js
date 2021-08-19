import React from "react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container homepage">
        <div className="row">
            <div className="col">
                <h1>Hey, I'm Alex.</h1>
                <br />
                <p>I'm an aspiring web developer, amaeteur photographer, maker of surfboards and musician.</p>
                <p>Currently, I'm employeed at <a href="http://www.atlassian.com">Atlassian</a>, an Australian software company.</p>
                <p>If you'd like, feel free to <Link to="/about">learn more about me</Link>, <Link to="/resume">check out my resume</Link>, or even <Link to="/contact">reach out</Link>. I look forward to hearing from you!</p>
             </div>
        </div>
    </div>
  );
}

export default Home;