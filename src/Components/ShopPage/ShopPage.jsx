import React from 'react';
import './ShopPage.scss';
import { Container, Col, Row } from 'reactstrap';
import BannerImage from '../../assets/imgs/11.jpg';
import ProductCard from '../ProductCard/ProductCard';

const ShopPage = () => {

    const shopProducts = [
        {
            name: "Tomato",
            price: "1.99 / lb",
            description: "Delicious and ripe"
        },
        {
            name: "Cabbage",
            price: "0.99 / lb",
            description: "Delicious and ripe"
        },
        {
            name: "Orange",
            price: "2.99 / lb",
            description: "Delicious and ripe"
        },
        {
            name: "Potato",
            price: "1.56 / lb",
            description: "Delicious and ripe"
        },
        {
            name: "Strawberry",
            price: "3.99 / lb",
            description: "Delicious and ripe"
        },
        {
            name: "Spinach",
            price: "0.99 / lb",
            description: "Delicious and ripe"
        },
        {
            name: "Papaya",
            price: "5.99 / lb",
            description: "Delicious and ripe"
        },
    ]

    return (
        <div className="ShopPage">
            <div className="ShopBanner">
                <div className="ShopBannerContent">

                </div>
            </div>
            <div className="ShopContent">
                <div className="ShopSideBar">

                </div>
                <Container fluid={true} className="ShopGrid">
                    <Row className="ShopGridRow">
                        {shopProducts.map((product) => (
                            <Col xs={{ size: 9, offset: 2 }} sm={{ size: 6, offset: 0 }} md="4" lg="3">
                            <ProductCard 
                                product={product} 
                                key={product.name}
                            />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default ShopPage;