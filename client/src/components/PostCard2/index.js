import React from "react";
import { ListGroup, ListGroupItem, Container, Link, Image, Button, Row, Col } from 'react-bootstrap';
import './style.css';
// import burger from './burger.jpeg';
import Moment from 'react-moment';
import 'moment-timezone';

function PostCard2(props) {

    return (
        <Container className="compactView">
            <Row>
                <Col xs={4} m={6} className="imageSide">
                    <Image className="smallImage" src={props.image} />
                </Col>
                <Col xs={8} m={6} >
                    <strong className="cardName">{props.name}</strong>
                    <ListGroup  className="infoSide">
                        <ListGroupItem><strong>Posted by</strong> {props.user}</ListGroupItem>

                        <ListGroupItem>{props.description}</ListGroupItem>


                        <ListGroupItem>
                            {props.renderStars(props.rating)}
                        </ListGroupItem>
                        <ListGroupItem><strong>Location:</strong> {props.address}</ListGroupItem>
                        <ListGroupItem><strong>Date:</strong>
                    <Moment format="ll">
                                {props.date}
                            </Moment>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
export default PostCard2;