import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux';

import { MenuItem } from '../';

import './directoryMenu.scss';

const DirectoryMenu = ({sections}) => {

    return (
        <div className='directory-menu'>
            {sections.map(({id, ...otherProps}) => (
                <MenuItem
                    key = {id}
                    {...otherProps}
                />
            ))}
        </div>
    );

}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryMenu);
