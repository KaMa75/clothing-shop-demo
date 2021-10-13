import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux';

import { CollectionPreview } from '../../components';

import './shopPage.scss';

const ShopPage = ({collections}) => {
    return (
        <div className='shop-page'>
            {collections.map(({id, ...otherProps}) => {
                return (
                    <CollectionPreview
                        key={id}
                        {...otherProps}
                    />
                )}
            )}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);
