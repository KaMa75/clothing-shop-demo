import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

CustomButton.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string,
    isGoogleSignIn: PropTypes.bool,
    inverted: PropTypes.bool
}

CustomButton.defaultProps = {
    type: 'button',
    inverted: false
}

export default CustomButton;
