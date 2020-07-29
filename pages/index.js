//Import the Link API to support client-side navigation
import Link from "next/link";

import Layout from "../components/MyLayout";
import { Container } from "react-bootstrap";

const index = () => (
  <Layout>
    <Container>
      <div className="row justify-content-center">
        <h1>Welcome to my profile</h1>
      </div>
      <div className="row justify-content-center">
        <h2>Feel free to browse and learn more about me</h2>
      </div>
    </Container>
  </Layout>
);

export default index;
