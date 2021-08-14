import React, { Component } from 'react';

import { MenuItem } from '../menuItem';

import './directoryMenu.scss';

import { menuItems } from '../../data/menu-items';

class DirectoryMenu extends Component {
    state = {
        menuItems
    }

    render() {
        const { menuItems } = this.state;
        return (
            <div className='directory-menu'>
                {menuItems.map(({id, title, subtitle, imageUrl, size}) => (
                    <MenuItem
                        key = {id}
                        title = {title}
                        subtitle = {subtitle}
                        imageUrl = {imageUrl}
                        size = {size}
                    />
                ))}
            </div>
        )
    }
}

export default DirectoryMenu;
