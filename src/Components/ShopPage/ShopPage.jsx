import React from 'react';
import './ShopPage.scss';

const ShopPage = () => {
    return (
        <div className="ShopPage">
            <div className="ShopItemsGrid">
                <div className="ProductContainer">
                    <h1 className="ProductContainerName">Tomato</h1>
                    <p className="ProductContainerPrice">$1.49 / lb.</p>
                </div>
                <div className="ProductContainer">
                    <h1 className="ProductContainerName">Green Cabbage</h1>
                    <p className="ProductContainerPrice">$0.99 / lb.</p>
                </div>
                <div className="ProductContainer">
                    <h1 className="ProductContainerName">Yellow Onion</h1>
                    <p className="ProductContainerPrice">$0.99 / lb.</p>
                </div>
                <div className="ProductContainer">
                    <h1 className="ProductContainerName">Grapes</h1>
                    <p className="ProductContainerPrice">$2.49 / lb.</p>
                </div>
                <div className="ProductContainer">
                    <h1 className="ProductContainerName">Spinach</h1>
                    <p className="ProductContainerPrice">$1.29 / lb.</p>
                </div>
                <div className="ProductContainer">
                    <h1 className="ProductContainerName">Potato</h1>
                    <p className="ProductContainerPrice">$0.99 / lb.</p>
                </div>
            </div>
        </div>
    )
}

export default ShopPage;