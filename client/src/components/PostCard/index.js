import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './style.css';
import burger from './burger.jpeg';

function PostCard() {

    return (
        <Card>
            <Card.Img variant="top" fixed='top' src={burger} />
            <Card.Body>
                <Card.Title>Dank Burger</Card.Title>
                <Card.Text>
                    This dish was sweet but also SAVORY.. Can't think of anything better!
    </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    ⭐⭐⭐⭐⭐
                </ListGroupItem>
                <ListGroupItem>Bubba's Dank Tank - Raleigh NC</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Button><Card.Link href="#">Like</Card.Link></Button>
                <Button><Card.Link href="#">Report</Card.Link></Button>
            </Card.Body>
        </Card>
    )

}

export default PostCard;