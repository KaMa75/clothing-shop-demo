import React from 'react';

import './emptyState.scss';

const EmptyState = ({children}) => {
    return (
        <div className='empty-state'>
            {children}
        </div>
    );
}

export default EmptyState;
