import React from 'react';
import Menu from '../components/Menu';

const Home = (): React.JSX.Element =>{
    return (
        <div>
            <Menu />
            <main className="container mt-4">
                <h6 className="text-left">Lista de películas</h6>
            </main>
        </div>
    );
};

export default Home;
