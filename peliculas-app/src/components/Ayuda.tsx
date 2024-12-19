import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Ayuda = (): React.JSX.Element => {
    return (
        <>
        <Menu />
            <div className='d-flex justify-content-evenly mt-5'>

                <h2>
                    <Link className="nav-link" to="/">Preguntas Frequentes</Link>
                </h2>

                <h2>
                    <Link className="nav-link" to="/">Referencias</Link>

                </h2>
            </div>
        </>
    );
};

export default Ayuda;
