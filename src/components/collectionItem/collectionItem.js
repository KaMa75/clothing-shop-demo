import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton } from '../customButton';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart';

import './collectionItem.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            >
                <CustomButton
                onClick={()=>addItem(item)}
                inverted
                >
                    Add to cart
                </CustomButton>
            </div>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{`${price}$`}</span>
            </div>
        </div>
    );
}

CollectionItem.propTypes = {
    addItem: PropTypes.func,
    item: PropTypes.exact({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired
    })
}

const addDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, addDispatchToProps)(CollectionItem);
