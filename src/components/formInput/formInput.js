import React from 'react';

import { PropTypes } from 'prop-types';

import './formInput.scss';

const FormInput = ({handleChange, label, ...otherProps}) => {
    console.log(otherProps);
    return (
        <div className='input-group'>
            <input
                className='input-field'
                onChange={handleChange}
                {...otherProps}
            />
            {
                label && (
                    <label
                        className={`input-label ${otherProps.value.length ? 'shrink' : ''}`}
                    >
                        {label}
                    </label>
                )
            }
        </div>
    );
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool,
    handleChange: PropTypes.func
}

FormInput.defaultProps = {
    type: 'text',
    required: false
}

export default FormInput;
