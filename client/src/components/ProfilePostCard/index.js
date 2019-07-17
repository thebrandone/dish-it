import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './style.css';
// import burger from './burger.jpeg';
import Moment from 'react-moment';
import 'moment-timezone';

function ProfilePostCard(props) {

    return (
        <Card>
            <ListGroup className="list-group-flush">
                <ListGroupItem className="author">
                    {props.user}
                </ListGroupItem>
            </ListGroup>

            <Card.Img variant="top" fixed='top' src={props.image} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    {props.renderStars(props.rating)}
                </ListGroupItem>
                <ListGroupItem>
                    {props.tags}
                </ListGroupItem>
                <ListGroupItem>Location: {props.address}</ListGroupItem>
                <ListGroupItem>Date:      
                    <Moment format="LLLL">
                    {props.date}    
                    </Moment>
                     </ListGroupItem>
            </ListGroup>
            {/* <Card.Body>
                <Button/>
            </Card.Body> */}
        </Card>
    )
}
export default ProfilePostCard;