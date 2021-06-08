import React from 'react';
import './ProductCard.scss';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const ProductCard = ({ product }) => {
    return (
        <div>
             <Card className="ProductCard">
                <CardImg top width="100%" src="/assets/318x180.svg" alt={product.name} />
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
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductCard;