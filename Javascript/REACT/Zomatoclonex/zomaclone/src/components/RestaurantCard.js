import {Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function RestaurantCard({restaurant}) {

    return(
        <Card>
            <Card.Img variant="top" src={restaurant.img}></Card.Img>
            <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Button as={Link} to={`/restaurant/${restaurant.id}`} variant="primary">View Menu</Button>
                
            </Card.Body>
        </Card>
    )

};

export default RestaurantCard;
