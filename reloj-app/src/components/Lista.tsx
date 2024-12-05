import React from 'react';

interface ListaProps {
  savedTimes: string[];
}

const Lista: React.FC<ListaProps> = ({ savedTimes }) => {
  return (
    <div className="mt-4">
      <h3>Instantes Guardados:</h3>
      <ul className="list-group">
        {savedTimes.map((time, index) => (
          <li key={index} className="list-group-item">
            {time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
