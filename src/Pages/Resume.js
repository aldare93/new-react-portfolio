import React from "react";

function Resume(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col">
                <h1>{props.title}</h1>
                <hr/>
                <h2>Experience</h2>
            </div>
        </div>
    </div>

    <div className="container">
      <div className="row">
          <div className="col-xs-12 col-lg-6 job-block">
              <h4>Atlassian - <i>Web Producer</i></h4>
              <h6>San Francisco, CA - July 2019 to current</h6>
              <ul>
                <li>Supports Atlassian’s web presence by using a CMS to modify and create new web pages</li>
                <li>Utilizes SEO best practices and understands the workflow for translation work for maximum visibility and accessibility on web pages </li>
                <li>Works cross-functionally with stakeholders to ship work that is consistent with Atlassian standards and guidelines</li>
              </ul>
          </div>

          <div className="col-xs-12 col-lg-6 job-block">
            <h4>Donnelley Financial Solutions - <i>Financial Services Account Specialist</i></h4>
            <h6>Irvine & San Diego, CA - February 2019 - May 2019</h6>
            <ul>
              <li>Worked with composition, graphic and logistics teams to produce regulatory and transactional  documents on strict deadlines for electronic filing with the Securities and Exchange Commission</li>
              <li>Communicated directly with clients, ranging from small start ups  to Fortune 500 companies</li>
              <li>Actively managed production of printed materials and coordinate fulfillment of printed assets with internal and external  production facilities and external vendor services</li>
            </ul>
          </div>

          <div className="col-xs-12 col-lg-6 job-block">
            <h4>Nike - <i>Retail Associate (Seasonal)</i></h4>
            <h6>Carlsbad, CA - December 2016 - 2017</h6>
              <ul>
                <li>Worked in a high-traffic retail sales environment and provided excellent customer service while also maintaining and restocking inventory levels during peak season  </li>
              </ul>
          </div>

          <div className="col-xs-12 col-lg-6 job-block">
            <h4>ZzyxX Shoes - <i>Social Media Intern</i></h4>
            <h6>Carlsbad, CA - October 2016 to April</h6>
              <ul>
                <li>Collaborated  with a team to produce and curate content for use across social media platforms</li>
              </ul>
          </div>

          <div className="col-xs-12 col-lg-6 job-block">
            <h4>Legoland California - <i>Lifeguard</i></h4>
            <h6>Carlsbad, CA - May 2010 - September 2014</h6>
              <ul>
                <li>Monitored patron safety, operated attractions, provided medical attention where necessary in a high-traffic, high-risk water park while maintaining excellent customer service and enjoyment</li>
              </ul>
          </div>

          <div className="col-xs-12 job-block">
            <hr/>
          </div>
      </div>
    </div>

    <div className="container education" id="ed-block">
      <div className="row">
          <div className="col">
              <hr/>
              <h2>Education</h2>
          </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
          <div className="col-xs-12 col-lg-6 job-block">
              <h4>University of California, Riverside</h4>
              <h6>Riverside, CA - September 2012 - August 2016</h6>
              <ul>
                <li>Bachelor of Arts in Business Economics</li>
              </ul>
          </div>
      </div>
    </div>

    <div className="container education bottom">
      <div className="row">
          <div className="col">
              <h4>To download a copy of my resume, click <a href="./assets/current-resume.pdf">here</a>.</h4>
          </div>
      </div>
    </div>
    </div>
  );
}

export default Resume;