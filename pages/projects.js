//Import the Link API to support client-side navigation
import Link from "next/link";
import Image from "react-bootstrap/Image";
import Layout from "../components/MyLayout";

import { Row, Col, } from "react-bootstrap";


const projects = () => (
  <Layout>
   
      <Row>
       <Col md={'auto'}>
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <Image class="activator" src="/static/images/minesweeper.png" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4 font-weight-bold">
             Minesweeper<i class="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="https://morning-dusk-09436.herokuapp.com/" target='_blank'><h6>Try it out here</h6></a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4 font-weight-bold">
              Minesweeper<i class="material-icons right">close</i>
            </span>
            <h6>
              This is one of my capstone projects after learning how to use react.The task was to building a gaming using react.
              I chose minesweeper to build minesweeper.This project was challenge but once I figured out the main logic, it all came together.
              After testing and debugging this app ,I deployed and hosted it on Heroku.Click on the 'try it out' link and see if you can win.
            </h6>
          </div>
        </div>
        </Col>
        <Col md={'auto'}>
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <Image class="activator" src="/static/images/store.png" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4 font-weight-bold">
             Itunes Media Library<i class="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="https://immense-meadow-75751.herokuapp.com/" target='_blank'><h6>Try it out here</h6></a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4 font-weight-bold">
            Itunes Media Library<i class="material-icons right">close</i>
            </span>
            <h6>
             In this CapStone Project I applied my knowledge of using third-party api's with react and express.
             This project uses the Itunes api and allows the user to search for media using different search catergories.
             It also allows the user to store media they like on a favourites list which they can view.This project was also deployed on Heroku.
             Click on 'try it out here' to see for yourself.
            </h6>
          </div>
        </div>
        </Col>
    
        <Col md={'auto'}>
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <Image class="activator" src="/static/images/github-logo.png" />
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4 font-weight-bold">
             My Github<i class="material-icons right">more_vert</i>
            </span>
            <p>
              <a href="https://github.com/Liam-Hendricks" target='_blank'><h6>Check it out</h6></a>
            </p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4 font-weight-bold">
            My Github<i class="material-icons right">close</i>
            </span>
            <h6>
              I have many more projects to show but unfortunately they are not all deployed and hosted.
              You can view all the code for the projects that are hosted on Heroku as well as view the other projects that are not.
              Some of my other projects demostrate my early stages of learning javascript and html to fully developed MERN web applications.
            </h6>
          </div>
        </div>
        </Col>
        </Row>
    
  </Layout>
);
export default projects;
