//Import the Link API to support client-side navigation
import Link from "next/link";
import Image from "react-bootstrap/Image";
import Layout from "../components/MyLayout";
import { Col } from "react-bootstrap";


const about = () => (
  <Layout>
   
    <Col md={"auto"}>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <Image class="activator" src="/static/images/wedding.jpg" />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4 font-weight-bold">
            Liam Hendricks<i class="material-icons right">more_vert</i>
          </span>
          <p>
            <a
              href="https://www.linkedin.com/in/liam-hendricks-43aa33176/"
              target="_blank"
            >
              <h6>LinkedIn</h6>
            </a>
          </p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4 font-weight-bold">
            About me<i class="material-icons right">close</i>
          </span>
          <h6>
            I am a recent Computer system graduate from CPUT, with a full years’
            worth of industry work experience. This time was spent developing,
            testing and deploying code to perform required task. I am
            experienced in using the systems development life cycle (SDLC)
            method when working on new projects and maintaining or integrating
            into existing ones. I enjoy working on teams and am not afraid to
            take initiative in order to learn new things to accomplish what is
            required and may be required. I am currently finishing a Full Stack
            Web Development coarse HyperionDev, it has been challenging and
            rewarding but I can't wait to apply my newly gained knowlegde.
          </h6>
        </div>
      </div>
    </Col>
   
  </Layout>
);
export default about;
