import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ConceptsMenu = () => {
    return (
        <>
            <ul>
                <li><Link to="basciofreactjs">Basic of ReactJs</Link></li>
                <li><Link to="component">Components</Link></li>
                <li><Link to="jsx">JSX</Link></li>
            </ul>
            <Outlet/>   
        </>
    );
};

export default ConceptsMenu;