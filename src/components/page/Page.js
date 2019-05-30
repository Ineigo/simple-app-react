import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Page.scss';

export default class Page extends Component {
    static propTypes = {
        data: PropTypes.shape({
            state: PropTypes.string,
            title: PropTypes.string,
            case: PropTypes.string,
        }),
    };
    render() {
        return (<div className="Page">
            <h1 className="Page-title">{this.props.data ? this.props.data.title : 'Loading...'}</h1>
        </div>);
    }
}