import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton } from '../customButton';

import './collectionItem.scss';

const CollectionItem = ({name, price, imageUrl}) => {
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            >
                <CustomButton inverted>Add to cart</CustomButton>
            </div>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`${price}$`}</span>
            </div>
        </div>
    );
}

CollectionItem.propTypes = {
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
}

export default CollectionItem;
