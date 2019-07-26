import React, { Component } from 'react'
import Product from '../product/Product';

export default class Dashboard extends Component {
    render() {
        const mappedProducts = this.props.products.map(element => (
            <Product />
        ))
        return (
            <div className='products'>
                {mappedProducts}
            </div>
        )
    }
}