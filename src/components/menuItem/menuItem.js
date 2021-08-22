import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './menuItem.scss';

const MenuItem = ({title, subtitle, imageUrl, linkUrl, size, history, match}) => {
    return (
        <div
            className={`menu-item ${size}`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
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
    linkUrl: PropTypes.string.isRequired,
    size: PropTypes.string,
    history: PropTypes.string.isRequired,
    match: PropTypes.string.isRequired
}

export default withRouter(MenuItem);
