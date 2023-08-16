import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderContent = () => {
        return this.props.productsData.map(element => {
            return <ProductItem setStateModal={this.props.setStateModal} key={element.id} element={element} />
        })
    }
    render() {
        return (
            <div className='row'>
                {this.renderContent()}
            </div>
        )
    }
}
