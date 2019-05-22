import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="rs-app">
                <img src="/favicon.png" alt="Dancing logo" className="rs-app__img" />
                <p className="rs-app__text">{this.props.text}</p>
            </div>
        );
    }
}

App.propTypes = {
    text: PropTypes.string.isRequired
};

export default App;