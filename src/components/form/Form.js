import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            productName: '',
            price: '',
            imageUrl: ''
        }
    }
    handleAddImage = (event) => {
        this.setState({ imageUrl: event.target.value })
    }
    handleAddProductName = (event) => {
        this.setState({ productName: event.target.value })
    }
    handleAddPrice = (event) => {
        this.setState({ price: event.target.value })
    }
    render() {
        return (
            <div className='input-boxes'>
                <input type="text" value={this.state.value} onChange={this.handleAddImage} placeholder='Image_url:' />
                <input type="text" value={this.state.value} onChange={this.handleAddProductName} placeholder='Product Name' />
                <input type="text" value={this.state.value} onChange={this.handleAddPrice} placeholder='Price' />
                <button>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}