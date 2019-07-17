import React, { Component } from "react"
import Wrapper from "../components/wrapper"
import Cards from "../components/PicsDishTeam"
import { Container, Carousel, Image, CarouselItem } from "react-bootstrap";



class DishTeam extends Component {
    state = {
        cards: [
            {
                "id": 0,
                "name": "Greg Horrocks",
                "image": "https://media.licdn.com/dms/image/C4E03AQEdHCAV1iSlOA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=PEt0c6gMtJVE4Yx_N6K6JLiel10Mec8iIhLHh0DF_nc"
            },
            {
                "id": 1,
                "name": "Robert Tibbs",
                "image": "https://media.licdn.com/dms/image/C4D03AQEQaoGqmwkvFA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=TrVEa8D40X0hwxUOvJeou72ulG_30hgMhb_qlB5SQJg"
            },
            {
                "id": 2,
                "name": "Ryan Brown",
                "image": "https://avatars3.githubusercontent.com/u/44414542?s=460&v=4"
            },
            {
                "id": 3,
                "name": "Blair Betts",
                "image": "https://media.licdn.com/dms/image/C4E03AQFTbJOBOQT_ZA/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=xxRu7far82gurJtMtH2WIsxXW9F6_yZODcEpMlOT4AI"
            },
            {
                "id": 5,
                "name": "Brandon Emons",
                "image": "https://dish-it-project.s3.amazonaws.com/bucketFolder/IMG_20190426_124758.jpg"
            }
        ]
    };
    componentDidMount() {
        var stateCopy = Object.assign({}, this.state);
        this.setState(stateCopy);
        console.log(stateCopy)
    }


    // Map over this.state.cards and render a cardsCard component for each cards object
    render() {
        return (
            <Container className="dishTeam">

                <h2> Dish-it! Team </h2>
                <div className="dishTeam">
                    <Carousel className="light">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media.licdn.com/dms/image/C4E03AQEdHCAV1iSlOA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=PEt0c6gMtJVE4Yx_N6K6JLiel10Mec8iIhLHh0DF_nc"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Greg Horrocks</h3>
                                <p>gregfhorrocks@gmail.com</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media.licdn.com/dms/image/C4D03AQEQaoGqmwkvFA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=TrVEa8D40X0hwxUOvJeou72ulG_30hgMhb_qlB5SQJg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Robert Tibbs</h3>
                                <p>Tibbsr09@gmail.com</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://avatars3.githubusercontent.com/u/44414542?s=460&v=4"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Ryan Brown</h3>
                                <p>rb054549@gmail.com</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media.licdn.com/dms/image/C4E03AQFTbJOBOQT_ZA/profile-displayphoto-shrink_200_200/0?e=1568851200&v=beta&t=xxRu7far82gurJtMtH2WIsxXW9F6_yZODcEpMlOT4AI"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Blair Betts</h3>
                                <p>blairbetts25@gmail.com</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://dish-it-project.s3.amazonaws.com/bucketFolder/IMG_20190426_124758.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Brandon Emons</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <Image className="dishitLogo" src="https://dish-it-project.s3.amazonaws.com/bucketFolder/dishitlogo.png"/>

            </Container>
        );
    }
}
export default DishTeam