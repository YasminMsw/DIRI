import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Menu = (): React.JSX.Element => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light"  style={{ backgroundColor: '#EFE3E3' }}>
                <div className="container-fluid d-flex justify-content-evenly ">
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Hinted search text"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            <FontAwesomeIcon icon={faSearch} style={{ color: 'black', borderColor:'black' }} />

                        </button>
                    </form>
                 
                    <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/ayuda">Ayuda</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Menu;
