import React from "react";

import './homepage.scss';

import { menuItems } from "../data/menu-items";

const HomePage = () => (
    <>
        {menuItems.map(menuItem => (
            <div className='homepage' key={menuItem.id}>
                <div className='directory-menu'>
                    <div className='menu-item'>
                        <div className='content'>
                            <h1 className='title'>{menuItem.title}</h1>
                            <span className='subtitle'>{menuItem.subtitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
);

export default HomePage;
