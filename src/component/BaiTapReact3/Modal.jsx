import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={this.props.content.image} />
                <div className="card-body">
                    <h4 className="card-title">Name: {this.props.content.name}</h4>
                    <p className="card-text">ID Product: {this.props.content.id}</p>
                    <p className="card-text">Price: {this.props.content.price} $</p>
                    <p className="card-text">Descripsion: {this.props.content.description} </p>
                </div>
            </div>
        )
    }
}
