import React from 'react';
import { CollectionItem } from '../';

import PropTypes from 'prop-types';

import './collectionPreview.scss';

const CollectionPreview = ({title, items}) => {
    console.log(title)
    return (
        <div className='collection-preview'>
            <h1 className='title'>
                { title.toUpperCase() }
            </h1>

            <div className='preview'>
                {
                    items
                        .filter((item, index) => {
                            return index < 4;
                        })
                        .map(({id, ...otherProps}) => (
                        <CollectionItem key={id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    )
}

CollectionPreview.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

export default CollectionPreview;
