import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default class MenuItem extends Component {
    static propTypes = {
        state: PropTypes.string,
        title: PropTypes.string,
        case: PropTypes.string,
        isActive: PropTypes.bool,
    }

    render() {
        const className = `Menu-item ${this.props.isActive ? 'Menu-item_active' : ''}`;
        return <Link className={className} to={this.props.state}>{this.props.title}</Link>;
    }
}