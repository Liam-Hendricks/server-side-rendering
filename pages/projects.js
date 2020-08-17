//Import the Link API to support client-side navigation
import Link from "next/link";
import Image from "react-bootstrap/Image";
import Layout from "../components/MyLayout";

import { Row, Col, } from "react-bootstrap";


const projects = () => (
  <Layout>
   
      <Row className="justify-content-center">
       <Col md={'auto'}>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <Image className="activator" src="/static/images/minesweeper.png" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4 font-weight-bold">
             Minesweeper<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="https://morning-dusk-09436.herokuapp.com/" target='_blank'><h6>Try it out here</h6></a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4 font-weight-bold">
              Minesweeper<i className="material-icons right">close</i>
            </span>
            <h6>
              This is one of my capstone projects after learning how to use react.
            <br/>
             <br/>
             The task was to building a gaming using react.
             <br/>
             <br/>
              I chose minesweeper to build minesweeper.
             <br/>
             <br/>
             This project was challenge but once I figured out the main logic, it all came together.
             <br/>
             <br/>
              After testing and debugging this app ,I deployed and hosted it on Heroku.
             <br/>
             <br/>
             Click on the 'try it out' link and see if you can win.
            </h6>
          </div>
        </div>
        </Col>
        <Col md={'auto'}>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <Image className="activator" src="/static/images/store.png" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4 font-weight-bold">
             Itunes Media Library<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="https://immense-meadow-75751.herokuapp.com/" target='_blank'><h6>Try it out here</h6></a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4 font-weight-bold">
            Itunes Media Library<i className="material-icons right">close</i>
            </span>
            <h6>
             In this CapStone Project I applied my knowledge of using third-party api's with react and express.
             <br/>
             <br/>
             This project uses the Itunes api and allows the user to search for media using different search catergories.
             <br/>
              <br/>
             It also allows the user to store media they like on a favourites list which they can view.This project was also deployed on Heroku.
             <br/>
             <br/>
             Click on 'try it out here' to see for yourself.
            </h6>
          </div>
        </div>
        </Col>


        <Col md={'auto'}>
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <Image className="activator" src="/static/images/drone-app.png" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4 font-weight-bold">
              Drone Operation App<i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="https://rpasflighplanner.herokuapp.com/" target='_blank'><h6>Try it out here</h6></a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4 font-weight-bold">
              Drone Operation App<i className="material-icons right">close</i>
              </span>
              <h6>
                This is my final Cap Stone Project of my bootcamp ,where I apply everything I have learnt in the MERN stack.
                <br/>
                <br/>
                While I was completing my bootcamp I was also undertaking a drone coarse for a RPAS lisence.
                <br/>
                <br/>
                This is where this app idea came from.
                <br/>
                <br/>
                It allows user to plan drone flights and have all the nessessary documents.
                <br/>
                <br/>
                A user also has access to where data to their location or at the location of the planned flight.
              </h6>
            </div>
          </div>
        </Col>
    
        <Col md={'auto'}>
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <Image className="activator" src="/static/images/github-logo.png" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4 font-weight-bold">
             My Github<i className="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="https://github.com/Liam-Hendricks" target='_blank'><h6>Check it out</h6></a>
            </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4 font-weight-bold">
            My Github<i className="material-icons right">close</i>
            </span>
            <h6>
              I have many more projects to show but unfortunately they are not all deployed and hosted.
              <br/>
              <br/>
              You can view all the code for the projects that are hosted on Heroku as well as view the other projects that are not.
              <br/>
              <br/>
              Some of my other projects demostrate my early stages of learning javascript and html to fully developed MERN web applications.
            </h6>
          </div>
        </div>
        </Col>
       
        
       
      </Row>
       
    

        
    
  </Layout>
);
export default projects;
