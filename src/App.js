import "./App.css";
import React from "react";
// import './Videos/SeniorTest.mov';
// import { FaPhone } from 'react-icons/fa';
// import { FaMailBulk } from 'react-icons/fa';
// import { FaPhoneSquareAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <div className="centertext">
        <div>
          <img
            className="profilepicture"
            src="/Images/me.jpg"
            alt="Charbel Mansour"
          />
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: "3%",
            }}
          >
            <div className="namebackground">
              <h1 className="name">Charbel Mansour</h1>
            </div>
          </div>
        </div>
        <br style={{ marginTop: "8vh" }}></br>
        <div>
          <h2
            style={{
              fontFamily: "serif",
              backgroundColor: "white",
              marginLeft: "25vw",
              marginRight: "25vw",
              color: "black",
              fontSize: "1.3em",
              fontWeight: "lighter",
            }}
          >
            Game, Web & Mobile Developer
          </h2>
          <h4
            style={{
              fontSize: "0.97em",
              textAlign: "center",
              marginLeft: "20%",
              marginRight: "20%",
              color: "black",
              fontFamily: "serif",
              lineHeight: "3vh",
              fontWeight: "lighter",
            }}
          >
            Problem solving computer scientist with great experience in mobile
            app <br></br> development, web design and game development.
            Experience in Python,<br></br> Xamarin forms, HTML, CSS, JavaScript,
            React js and Unity Game Engine.
          </h4>
        </div>
        <fieldset className="fieldset1">
          <legend>Education</legend>
          <h4
            style={{ fontFamily: "initial", fontsize: "100%", color: "white" }}
          >
            BS in Computer Science <br></br> American University of Culture and
            Education, Beirut
          </h4>
          <h5 style={{ marginTop: "0px", fontSize: "0.75em", color: "white" }}>
            Oct 2017 - Jan 2022
          </h5>
          <h5
            style={{
              marginTop: "10vh",
              fontSize: "0.72em",
              color: "white",
              textAlign: "start",
            }}
          >
            {" "}
            • 3.16 GPA, Dean's honor list for Spring 2021.
          </h5>
          <h5
            style={{
              marginTop: "0.5vh",
              fontSize: "0.72em",
              color: "white",
              textAlign: "start",
            }}
          >
            {" "}
            • Certificate of attendance 2019 FIBARO smart home and Eco Systems
          </h5>
          <h5
            style={{
              marginTop: "0.5vh",
              fontSize: "0.72em",
              color: "white",
              textAlign: "start",
            }}
          >
            {" "}
            • Certificate of attendance 2020 IoT and its applications
          </h5>
        </fieldset>
        <br style={{ marginTop: "12vh" }}></br>
        {/* <h2 style={{fontFamily:"monospace",fontSize:"1.15em"}}>My work</h2> */}
        {/* <div className='row'> */}

        {/* PROJECTS */}
        <div style={{ marginTop: "15vh" }}>
          <fieldset className="fieldset2">
            <legend>Projects</legend>
            {/* <div className="column">
              <h3 className="textstroke">2D Environment game</h3>
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "lighter",
                  color: "white",
                  fontSize: "0.99em",
                }}
              >
                2D game created using "Unity Game Engine" that shows the
                problems of our environment and their corresponding solutions,
                in a fun 2d game designed to be fun and educative at the same
                time.
              </h4>
            </div>
            <div className="column">
              <video
                className="zoom"
                src="/Images/SeniorTest.mov"
                alt="ASPEC Game"
                autoPlay={true}
                preLoad="auto"
                loop
              >
                Test
              </video>
            </div> */}
            <br style={{ marginTop: "15vh" }}></br>
            {/* <br></br> */}
            <div className="column">
              <h3 className="textstroke">Fully functional QR company form</h3>
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "lighter",
                  color: "white",
                  fontSize: "0.99em",
                }}
              >
                Form created using both xamarin forms and react js, it allows
                the user to scan a barcode prompting the automatic filling of
                his information, with an option to save.
              </h4>
            </div>
            <div className="column">
              <img className="zoomForm" src="/Images/form.png" alt="Form" />
            </div>
            <br style={{ marginTop: "15vh" }}></br>
            <div className="column">
              <h3 className="textstroke">Company form</h3>
              <h4
                style={{
                  fontFamily: "serif",
                  fontWeight: "lighter",
                  color: "white",
                  fontSize: "0.99em",
                }}
              >
                A relatilvery smaller company form, made using Xamarin Forms.
              </h4>
            </div>
            <div className="column">
              <img className="zoomForm2" src="/Images/Form2.png" alt="Form" />
            </div>
            <br></br>
          </fieldset>
        </div>
        <br></br>
        {/* <div>
          <FaPhoneSquareAlt style={{ marginLeft: "5vw" }} />
          <h4>Phone: +96171032883</h4>
        </div> */}
        <h4>Email: cam005@auceonline.com</h4>
        <h4 style={{ fontSize: "0.7em", textAlign: "center" }}>
          (portfolio made using react js from scratch)
        </h4>
      </div>
    </div>
  );
}

export default App;
