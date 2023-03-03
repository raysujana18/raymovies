import { Card, Col, Container, Row, Image } from "react-bootstrap"
import pesugihanImage from "../assets/images/superhero/pesugihan.jpg"
import iblisImage from "../assets/images/superhero/iblis.jpg"
import waktumagribImage from "../assets/images/superhero/waktumagrib.jpg"
import kembangapiImage from "../assets/images/superhero/kembangapi.jpg"
import jalanjauhImage from "../assets/images/superhero/jalanjauh.jpg"
import bismillahImage from "../assets/images/superhero/bismillah.jpg"
const superhero = () => {
    return (
    <div>
    <Container>
        <br/>
        <h1 className="text-white">HOROR MOVIES</h1>
        <Row>
            <Col md={4} className="movieWrapper" id="superhero">
             <Card className="movieImage">
                <Image src={pesugihanImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">PESUGIHAN</Card.Title>
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
                <Image src={iblisImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">PENGIKUT IBLIS</Card.Title>
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
                <Image src={waktumagribImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">WAKTU MAGHRIB</Card.Title>
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
                <Image src={kembangapiImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">KEMBANG API</Card.Title>
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
                <Image src={jalanjauhImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">JANGAN LUPA PULANG</Card.Title>
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
                <Image src={bismillahImage} alt="cred Movies" className="Images"/>
                <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                <Card.Title className="text-center">KUNIKAHI SUAMIMU</Card.Title>
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

export default superhero