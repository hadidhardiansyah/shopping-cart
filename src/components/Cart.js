import {Card, Col, Container, Image, Row} from "react-bootstrap";
import blueDenimImage from "../assets/blue-denim.jpg"
import redHoodieImage from "../assets/red-hoodie.jpg"
import {StyledCard, StyledCardCard} from "./styles";

const Cart = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <StyledCard>
                            <Card className="bg-dark text-white">
                                <StyledCardCard>
                                    <Image src={blueDenimImage} width={200} alt="Blue Denim Shirt"/>
                                    <Card.Title>TESTING</Card.Title>
                                    <Card.Text>
                                        TESTING
                                    </Card.Text>
                                    <Card.Text>TESTING</Card.Text>
                                </StyledCardCard>


                            </Card>
                            <br/>
                            <Card className="bg-dark text-white">
                                <StyledCardCard>
                                    <Image src={redHoodieImage} width={200} alt="Blue Denim Shirt"/>
                                    <Card.Title>TESTING</Card.Title>
                                    <Card.Text>
                                        TESTING
                                    </Card.Text>
                                    <Card.Text>TESTING</Card.Text>
                                </StyledCardCard>
                            </Card>
                        </StyledCard>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cart;