import React, { Component } from 'react';
import { FaHeart, FaHeartbeat } from 'react-icons/fa';
import '../styles/Class.css';


export default class Class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dark: false
        }
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    themeStyles(dark) {
        return {
            backgroundColor: dark ? "#222" : "crimson"
        }
    }

    toggleTheme = () => {
        this.setState((prev) => ({
            dark: !prev.dark
        }));
    }

    render() {
        return (
            <div id="class" style={this.themeStyles(this.state.dark)} onClick={this.toggleTheme}>
                {this.state.dark ? <FaHeartbeat className="heart" /> : <FaHeart className="heart" />}
            </div>
        )
    }
}