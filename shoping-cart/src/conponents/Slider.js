import { Carousel, Card, Button, CardGroup } from 'react-bootstrap'
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';



function Slider() {
    const [index, setIndex] = useState(0);
    const [links, setLinks] = useState('');

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        setLinks("https://images.unsplash.com/photo-1551457231-f3bb7403fcbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80")
    })

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </Carousel.Item>
            <Carousel.Item>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" height="250px" src={links} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="info">Info</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;