import React from 'react';
import { CollectionItem } from '../';

import PropTypes from 'prop-types';

import './collectionPreview.scss';

const CollectionPreview = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>
                { title.toUpperCase() }
            </h1>

            <div className='preview'>
                {
                    items
                        .filter((item, index) => {
                            return index < 100;
                        })
                        .map(item => (
                        <CollectionItem key={item.id} item={item} />
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
