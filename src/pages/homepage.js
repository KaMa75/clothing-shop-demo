import React from "react";

import './homepage.scss';

import { menuItems } from "../data/menu-items";

const HomePage = () => (

    <div className='homepage'>
        <div className='directory-menu'>
            {menuItems.map(menuItem => (
                <div className='menu-item' key={menuItem.id}>
                    <div className='content'>
                        <h1 className='title'>{menuItem.title}</h1>
                        <span className='subtitle'>{menuItem.subtitle}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>

);

export default HomePage;
