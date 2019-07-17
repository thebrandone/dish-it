import React from "react";
import { Row, Col, ListGroup, Image, ListGroupItem, Button } from 'react-bootstrap';
import './style.css';
import 'moment-timezone';

function ProfilePostCard(props) {

    return (

            <Row className="compactView">
                <Col xs={5} m={6} >
                    <strong className="cardName">{props.name}</strong>
                    <ListGroup className="infoSide">
                        <ListGroupItem className="desc">{props.description}</ListGroupItem>
                        <ListGroupItem>
                            Rating: {props.rating}
                        </ListGroupItem>
                        <ListGroupItem>Location: {props.address}</ListGroupItem>

                    </ListGroup>
                     <Button className="delButton" variant="danger"
                        onClick={() => props.dishDelete(props.id)}>
                        Delete</Button>
                </Col>
                <Col xs={7} m={6} className="imageSide">
                    <Image className="smallImage" src={props.image} />
                   
                </Col>
            </Row>
    )
}
export default ProfilePostCard;