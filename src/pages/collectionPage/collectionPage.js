import React from 'react';
import { CollectionPreview } from '../../components';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux';

import './collectionPage.scss';

const CollectionPage = ({collection, match}) => {
    console.log(match.params.collectionId)

    return (
        <div className='collection-page'>
            <div>
                <CollectionPreview
                    {...collection}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
