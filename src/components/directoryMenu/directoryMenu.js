import React, { Component } from 'react';

import { MenuItem } from '../';

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
                {menuItems.map(({id, ...otherProps}) => (
                    <MenuItem
                        key = {id}
                        {...otherProps}
                    />
                ))}
            </div>
        )
    }
}

export default DirectoryMenu;
