import React, { Component } from 'react'
import Product from '../product/Product';

export default class Dashboard extends Component {
    render() {
        const mappedProducts = this.props.products.map(element => (
            <Product
                product_name={element.product_name}
                price={element.price}
                image_url={element.image_url}
            />
        ))
        return (
            <div className='products'>
                {mappedProducts}
            </div>
        )
    }
}