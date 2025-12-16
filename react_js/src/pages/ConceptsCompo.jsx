import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ConceptsCompo = () => {
    return (
        <>
            {/* <p>This will contain Concept Ment</p> */}
            <ul>
                <li> <Link to="jsx">Basic JSX</Link> </li>
                <li> <Link to="useeffect">useEffect</Link> </li>
            </ul>
            <Outlet></Outlet>
        </>
    );
};

export default ConceptsCompo;