import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';

export default class MenuItem extends Component {
    static propTypes = {
        state: PropTypes.string,
        title: PropTypes.string,
        case: PropTypes.string,
    }

    render() {
        return <div className="Menu-item">{this.props.title}</div>;
    }
}