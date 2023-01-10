import React from "react";
type Hometype = {
  name: string,
  email: string,
}
const Home = (props: Hometype) => {
  return (
    <>
      <div className="container">
        <div className="hero">
          <h1 className="name"><strong>Rozer</strong> Bagh</h1>
          <span className="job-title">Fullstack Engineer</span>
          <a href="mailto:rozerbagh@gmail.com"
          ><span className="email">rozerbagh@gmail.com</span></a
          >

          <h2 className="lead">
            Development, Deployment and design of web applications.
          </h2>
        </div>
      </div>


      <div className="container">
        <div className="sections">
          <h2 className="section-title">Dev Skills</h2>

          <div className="list-card">
            <span className="exp">+ 3 years</span>
            <div>
              <h3>Language & Frameworks</h3>
              <span>Javascript, Core JAVA, Python, ReactJS, NextJS, Nodejs </span>
            </div>
          </div>

          <div className="list-card">
            <span className="exp">+ 3 years</span>
            <div>
              <h3>Deployment Tools</h3>
              <span>Jenkins, Docker, Firebase, Heroku.</span>
            </div>
          </div>

          <div className="list-card">
            <span className="exp">+ 3 years</span>
            <div>
              <h3>Linux</h3>
              <span
              >Scripting, Servers management and protocols, Automation.</span
              >
            </div>
          </div>
        </div>
        <div className="sections">
          <h2 className="section-title">Assist Skills</h2>

          <div className="list-card">
            <div>
              <h3>Design</h3>
              <span>Adobe, Illustrator, XD, Photoshop</span>
            </div>
          </div>

          <div className="list-card">
            <div>
              <h3>Database</h3>
              <span> MongoDB, MYSQL, MariaDB.</span>
            </div>
          </div>
          <div className="list-card">
            <div>
              <h3>Servers & Code Management</h3>
              <span>
                AWS EC2 instance, Digital Ocean Droplets, Bitbucket, Github.
              </span>
            </div>
          </div>
        </div>
      </div>


      <br />
      <br />
      <div className="container cards">
        <div className="card">
          <div className="skill-level">
            <span>+</span>
            <h2>10</h2>
          </div>

          <div className="skill-meta">
            <h3>Projects</h3>
            <span
            >Adapting and creating solutions for customer's needs, CMS,
              Ecommerce, Server deployment, Live Streaming</span
            >
          </div>
        </div>

        <div className="card">
          <div className="skill-level">
            <h2>50</h2>
            <span>%</span>
          </div>

          <div className="skill-meta">
            <h3>Web</h3>
            <span
            >Applications development integrating third-party services and
              mobile client(s)</span
            >
          </div>
        </div>

        <div className="card">
          <div className="skill-level">
            <h2>30</h2>
            <span>%</span>
          </div>

          <div className="skill-meta">
            <h3>Technical solutions</h3>
            <span>Such as web services, codes, configurations, deployment</span>
          </div>
        </div>

        <div className="card">
          <div className="skill-level">
            <h2>20</h2>
            <span>%</span>
          </div>

          <div className="skill-meta">
            <h3>Leading</h3>
            <span>Projects and ensure the quality of delivery</span>
          </div>
        </div>
      </div>

      <div className="container">
        <ol className="timeline">
          <li>
            <p className="line">Experiences</p>
            <span className="point"></span>
            <p className="description">Fullstack Developer @Zybisys</p>
            <span className="date">Sep. 2020 - Feb. 2022</span>
          </li>
          <li>
            <p className="line">Experiences</p>
            <span className="point"></span>
            <p className="description">Fullstack Developer @Zerozilla</p>
            <span className="date">Mar. 2022 - Today</span>
          </li>

          <li>
            <span className="point"></span>
            <p className="description">Freelance</p>
            <span className="date">Jan. 2019 - Today</span>
          </li>

          <li>
            <p className="line">Education</p>
            <span className="point"></span>
            <p className="description">Nitte Meenakshi Institute of Technology</p>
            <span className="date">2014 - 2018</span>
          </li>
        </ol>
      </div>

      <br /><br />

      <footer className="container">
        <span style={{
          fontSize: "16px",
          marginTop: "20px"
        }}
        >Coded by & Designed by
          <a href="mailto:rozerbagh@gmail.com">Rozer Bagh</a></span
        >
      </footer>
    </>
  )
}

export default Home;