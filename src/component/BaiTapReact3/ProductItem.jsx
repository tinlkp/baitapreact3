import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        return (
            <div className='col-4'>
                <div className="card" >
                    <img className="card-img-top" src={this.props.element.image} />
                    <div className="card-body">
                        <h4 className="card-title"> {this.props.element.name} </h4>
                        <p className="card-text"> {this.props.element.price} $</p>
                        <button onClick={() => { this.props.setStateModal(this.props.element) }} data-toggle="modal" data-target="#myModal" className="btn btn-dark">Show Description</button>
                    </div>
                </div>
            </div>


        )
    }
}
