import { Nav } from "react-bootstrap";
import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div>
    <Nav className="justify-content-center">
      <Nav.Item style={linkStyle}>
        <Link href="/">
          <a>
            <h5>Home</h5>
          </a>
        </Link>
      </Nav.Item>
      <Nav.Item style={linkStyle}>
        <Link href="/about">
          <a>
            <h5>About</h5>
          </a>
        </Link>
      </Nav.Item>
      <Nav.Item style={linkStyle}>
        <Link href="/projects">
          <a>
            {" "}
            <h5>Projects</h5>
          </a>
        </Link>
      </Nav.Item>
      <Nav.Item style={linkStyle}>
        <Link href="/contact">
          <a>
            {" "}
            <h5>Contact</h5>
          </a>
        </Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default Header;
