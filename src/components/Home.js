import flowers from "./../data"
import { Container, Row, Col, Card } from 'react-bootstrap';
function Home() {
    return (
        <Container>
            <Row>
                
                {flowers.map((flower) => {
                    
                    return (
                    <Col>
                        <Card style={{ width: '10rem' }}>
                            <Card.Img variant="top" src={flower.picture} />
                            <Card.Body>
                                <Card.Title>{flower.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    );
                })};

            </Row>
        </Container>
    );

};
export default Home;
