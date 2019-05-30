import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import './Menu.scss';

export default class Menu extends Component {
    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.shape({
            state: PropTypes.string,
            title: PropTypes.string,
            case: PropTypes.string,
        })).isRequired,
        className: PropTypes.string,
    };

    render() {
        const items = this.renderItems(this.props.items);
        return <nav className="Menu">{items}</nav>;
    }

    renderItems(items) {
        return items.map(item => <MenuItem  key={item.state+item.icon} {...item} />);
    }
}