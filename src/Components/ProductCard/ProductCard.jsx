import React from 'react';
import './ProductCard.scss';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ProductCard = ({ product }) => {
    return (
        <div className="ProductCard">
             <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">
                        {product.name}
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {product.price}
                    </CardSubtitle>
                    <CardText>
                        {product.description}
                    </CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductCard;