import React, { Component } from "react"
import Wrapper from "../components/wrapper"
import Cards from "../components/PicsDishTeam"
import { Container } from "react-bootstrap";


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
                "image": "https://files.slack.com/files-pri/TFC801MDL-FLKDWRTRV/img_20190426_124758.jpg"
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
            <div className= "dishTeam">
                <Container>
                    <Wrapper>
                        <strong>Dish It Team</strong>
                    {this.state.cards.map(card => (
                            <Cards
                                id={card.id}
                                key={card.id}
                                name={card.name}
                                image={card.image}
                            />
                        ))}
                    </Wrapper>
                    <Wrapper>
                        <div>
                            Dish-it! the app that allwos you to showcase the dishes that you have enjoyed and or not enjoyed while eating at your favorite restaurants.
                            Need ideas for what to eat? Scroll through evey dish that has been posted and see what looks good and get inspired of what to have for lunch or dinner.
                        </div>
                    </Wrapper>
                </Container>
            </div>
        );
    }
}
export default DishTeam