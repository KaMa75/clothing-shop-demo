import React from 'react';
import PropTypes from 'prop-types';

import './menuItem.scss';

const MenuItem = ({title, subtitle, imageUrl, size}) => {
    return (
        <div
            className={`menu-item ${size}`}
        >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>{subtitle}</span>
            </div>
        </div>
    );
}

MenuItem.defaultProps = {
    size: '',
    subtitle: 'shop now'
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    size: PropTypes.string
}

export default MenuItem;
