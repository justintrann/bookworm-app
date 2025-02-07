import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../../../assets/bookworm_icon.svg';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import 'animate.css';
import About from '../../page/about/About';

function MyNavbar() {
  return (
    <div className="navbar pt-0">
      <Navbar bg="navColor" variant='light' sticky='top' expand="sm" style={{ width: "100%" }} className="px-5">
        <Navbar.Brand href='/#'>
          <img src={Logo} height='60%' alt="Logo" className='animate__animated animate__fadeInUp' />
        </Navbar.Brand>

        <NavbarToggle />
        <NavbarCollapse>

          <Nav className="ms-auto">
            <Nav.Link href='/home'>Home</Nav.Link>
            <Nav.Link href='/shop'>Shop</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/cart'>Cart</Nav.Link>
            <Nav.Link href='/login'>Sign In</Nav.Link>
          </Nav>
        </NavbarCollapse>



      </Navbar>
      {/* <div className='content'>
        Content
      </div> */}
    </div>
  );
}


export default MyNavbar;
