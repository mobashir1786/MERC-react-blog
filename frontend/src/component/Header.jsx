import React from 'react';

const Header = (props) => {
    return (
            <h1 className='header color'key={props._id}>
                All The Item Come From {props.catogery}
            </h1>
    );
}

export default Header;
