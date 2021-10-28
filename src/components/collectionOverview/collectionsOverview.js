import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForOverview } from '../../redux';

import { CollectionPreview } from '..';

import './collectionsOverview.scss';

const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherProps}) => {
                return (
                    <CollectionPreview
                        key={id}
                        {...otherProps}
                    />
                )
            })}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForOverview
});

export default connect(mapStateToProps)(CollectionsOverview);
