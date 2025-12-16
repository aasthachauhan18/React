import { Link, Outlet } from 'react-router-dom';
// import ConceptCompo from './ConceptsCompo';

const Examples = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6">
                    <h2> <Link to="concepts/marimarji">Concepts</Link></h2>
                    {/* <ConceptCompo/> */}
                    {/* <ul>
                        <li><Link to="spreadvsrest">Spread vs Rest</Link></li>
                    </ul> */}
                </div>
                <div className="col-6">
                    <h2><Link to="my-examples">Examples</Link></h2>
                    <ul>
                        <li><Link to="usestatehook">useStateHooks</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                 <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Examples;