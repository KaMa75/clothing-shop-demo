import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({children, ...otherProps}) => {
    return (
        <button
            className='custom-button'
            {...otherProps}
        >
            {children}
        </button>
    );
}

CustomButton.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default CustomButton;
