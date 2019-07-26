import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div>
                {this.props.product_name}
                {this.props.price}
                {this.props.image_url}
            </div>
        )
    }
}