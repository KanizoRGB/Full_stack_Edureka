import { restaurants } from "../data/mockData";
import RestaurantCard from "../components/RestaurantCard";

import{ Row, Col } from "react-bootstrap";

function Home() {
    return(
        <>
            <h2>Nearby Restaurants</h2>
            <Row>
                {restaurants.map((res)=>(
                   <Col md={6} lg={4} key={res.id} className="mb-4">
                        <RestaurantCard restaurant={res} />
                    </Col>

                ))}
            </Row>
        </>
    )
}

export default Home;
