import React from 'react';

import './menuItem.scss';

const MenuItem = ({title, subtitle, imageUrl, size}) => {
    return (
        <div
            className={`menu-item ${size}`}
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        >
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>{subtitle}</span>
            </div>
        </div>
    );
}

export default MenuItem;
