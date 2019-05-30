import React, { Component } from 'react';
import './Page.scss';

export default class Page extends Component {
    render() {
        return (<div className="Page">
            <h1 className="Page-title">{this.props.data ? this.props.data.title : 'Loading...'}</h1>
        </div>);
    }
}