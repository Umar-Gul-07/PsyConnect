import React, { useContext, useState } from 'react';
import { Store } from '../../Utils/Store';


const Header = () => {
    const { state , dispatch} = useContext(Store);
    const { UserInfo } = state;

    return (
        <>
           <h1>Header</h1>
        </>
    );
};

export default Header;
