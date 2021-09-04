import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            text: 'London'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ text: 'Canada' });
    }

    render() {
        return (
            <div>
                <h1>{this.state.text}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    }
}

export default Header;