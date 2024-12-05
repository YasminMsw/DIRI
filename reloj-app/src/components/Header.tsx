import React from 'react';

interface HeaderProps {
  currentTime: string;
}

const Header: React.FC<HeaderProps> = ({ currentTime }) => {
  return (
    <div className="text-center d-flex gap-5">
        <div className='d-flex gap-2'>
            <h2>Hora actual:</h2>
            <h2 >{currentTime}</h2>
        </div>
      
      <button className="btn btn-primary">
        Guardar Instante
      </button>
    </div>
  );
};

export default Header;
