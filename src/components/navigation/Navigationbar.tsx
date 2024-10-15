import "./Navigationbar.css";
// Routing
import { NavLink } from "react-router-dom";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
// Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

const Navigationbar = () => {
  // Hooks
  const auth = useAuth();

  return (
    <Navbar id="navigationbar" expand="lg">
      <Navbar.Brand id="navigationbar-logo"><NavLink to="/">CRUD MEDIA</NavLink></Navbar.Brand>
      <Navbar.Toggle id="navigationbar-toggle" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav id="navigationbar-links">
          <LinkContainer to="/users" activeClassName="active">
            <Nav.Link>Users</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/posts">
            <Nav.Link>Posts</Nav.Link>
          </LinkContainer>
          {!auth.authUser &&
            <LinkContainer to="/auth/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          }
          {!auth.authUser &&
            <LinkContainer to="/auth/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          }
          {auth.authUser && 
            <LinkContainer to={`/users/${auth.authUser._id}`}>
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          }
          {auth.authUser && 
            <button onClick={auth.logout}>Logout</button>
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Navigationbar;