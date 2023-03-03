import {Navbar, Container, Nav} from "react-bootstrap"
const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="black">
            <Container>
                <Navbar.Brand href="/">RAY MOVIES</Navbar.Brand>
                <Nav>
                <Nav.Link href="#trending">TESTING</Nav.Link>
                <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar