import React, { Component } from 'react'
import "./style.css"
import Modal from './Modal'
import products from "../../data/data.json"
import ProductList from './ProductList';

export default class ShoesStore extends Component {
    state = {
        productDetail: products[0],
    };
    setStateModal = (product) => {
        this.setState({
            productDetail: product,
        })

    }
    render() {
        return (
            <div className='side'>
                <div className='sideLeft'>
                    <ul className='component'>
                        <li className='active'>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Shop</a>
                        </li>
                    </ul>
                </div>
                <div className='sideRight'>
                    <h2 className='header'>Shoes shop</h2>
                    <ProductList setStateModal={this.setStateModal} productsData={products} />
                </div>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <Modal content={this.state.productDetail} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
