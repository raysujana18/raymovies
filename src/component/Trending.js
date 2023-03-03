import { Card, Col, Container, Row, Image } from "react-bootstrap"
import credImage from "../assets/images/tranding/cred.jpg"
import kikoImage from "../assets/images/tranding/kiko.jpg"
import manImage from "../assets/images/tranding/man.jpg"
import maxImage from "../assets/images/tranding/max.jpg"
import missingImage from "../assets/images/tranding/missing.jpg"
import slamImage from "../assets/images/tranding/slam.jpg"
const Tranding = () => {
    return (
    <div>
    <Container>
        <br/>
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
            <Col md={4} className="movieWrapper" id="trending">
             <Card className="movieImage">
                <Image src={credImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">CRED</Card.Title>
                <Card.Text className="text-left">
                 This is a wider card with supporting text below as a natural lead-in
                 to additional content
                </Card.Text>
                <Card.Text className="text-left">
                Last updated 3 mins ago
                </Card.Text>
                </div>
                </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
             <Card className="movieImage">
                <Image src={slamImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">SLAM DUNK</Card.Title>
                <Card.Text className="text-left">
                 This is a wider card with supporting text below as a natural lead-in
                 to additional content
                </Card.Text>
                <Card.Text className="text-left">
                Last updated 3 mins ago
                </Card.Text>
                </div>
                </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
             <Card className="movieImage">
                <Image src={manImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">A MAN CALLED OTTO</Card.Title>
                <Card.Text className="text-left">
                 This is a wider card with supporting text below as a natural lead-in
                 to additional content
                </Card.Text>
                <Card.Text className="text-left">
                Last updated 3 mins ago
                </Card.Text>
                </div>
                </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
             <Card className="movieImage">
                <Image src={maxImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">IMAX</Card.Title>
                <Card.Text className="text-left">
                 This is a wider card with supporting text below as a natural lead-in
                 to additional content
                </Card.Text>
                <Card.Text className="text-left">
                Last updated 3 mins ago
                </Card.Text>
                </div>
                </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
             <Card className="movieImage">
                <Image src={missingImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">MISSING</Card.Title>
                <Card.Text className="text-left">
                 This is a wider card with supporting text below as a natural lead-in
                 to additional content
                </Card.Text>
                <Card.Text className="text-left">
                Last updated 3 mins ago
                </Card.Text>
                </div>
                </div>
            </Card>
            </Col>
            <Col md={4} className="movieWrapper">
             <Card className="movieImage">
                <Image src={kikoImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">KIKO DEEP SEA</Card.Title>
                <Card.Text className="text-left">
                 This is a wider card with supporting text below as a natural lead-in
                 to additional content
                </Card.Text>
                <Card.Text className="text-left">
                Last updated 3 mins ago
                </Card.Text>
                </div>
                </div>
            </Card>
            </Col>
        </Row>
    </Container>
    </div>
    )
}

export default Tranding