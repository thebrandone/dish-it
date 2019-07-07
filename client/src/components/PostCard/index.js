import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './style.css';
import burger from './burger.jpeg';

function PostCard(props) {
    return (
        <Card>
            <Card.Img variant="top" fixed='top' src={burger} />
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
                <ListGroupItem>Location: {props.location}</ListGroupItem>
                <ListGroupItem>Date: {props.date}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button><Card.Link href="#">Like</Card.Link></Button>
                <Button><Card.Link href="#">Report</Card.Link></Button>
            </Card.Body>
        </Card>
    )
}
export default PostCard;