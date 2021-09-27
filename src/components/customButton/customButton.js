import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

const CustomButton = ({children, isGoogleSignIn,...otherProps}) => {
    return (
        <button
            className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
            {...otherProps}
        >
            {children}
        </button>
    );
}

CustomButton.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.string,
    isGoogleSignIn: PropTypes.bool
}

CustomButton.defaultProps = {
    type: 'button'
}

export default CustomButton;
