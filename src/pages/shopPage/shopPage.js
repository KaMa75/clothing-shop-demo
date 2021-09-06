import React, { Component } from 'react';
import { CollectionPreview } from '../../components';

import './shopPage.scss';

import { shopData } from '../../data/shop-data';

class ShopPage extends Component {
    state = {
        collections: shopData
    }

    render() {
        const {collections} = this.state;
        console.log(collections)

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

}

export default ShopPage;
