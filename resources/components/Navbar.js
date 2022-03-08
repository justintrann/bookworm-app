import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '../bookworm_icon.svg';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function App() {
  return (
    <div className="App">
      <Navbar bg="navColor" variant='light' sticky='top' expand="sm">
        <Navbar.Brand href='/#'>
          <img src={Logo}height='60%' alt="Logo"/>
        </Navbar.Brand>
        <b>BOOKWORM</b>

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


export default App;
