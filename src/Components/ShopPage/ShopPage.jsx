import React from 'react';
import './ShopPage.scss';
import { Container, Col, Row } from 'reactstrap';

const ShopPage = () => {
    return (
        <div className="ShopPage">
            <Container fluid={true} className="ShopGrid">
                <Row className="ShopGridRow">
                    <Col xs="4" md="3" lg="2" className="ShopLeftSideBarMenu">
                    
                    </Col>
                    <Col xs="8" md="9" lg="10" className="ProductContainer">
                        <h1 className="ProductContainerName">Tomato</h1>
                        <p className="ProductContainerPrice">$1.49 / lb.</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default ShopPage;