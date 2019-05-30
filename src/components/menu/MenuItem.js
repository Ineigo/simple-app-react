import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default class MenuItem extends Component {
    static propTypes = {
        state: PropTypes.string,
        title: PropTypes.string,
        case: PropTypes.string,
    }

    render() {
        return <Link className="Menu-item" to={this.props.state}>{this.props.title}</Link>;
    }
}