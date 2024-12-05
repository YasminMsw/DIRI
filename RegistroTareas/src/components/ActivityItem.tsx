import React from 'react';

interface ActivityItemProps {
  nombreImagen: string;
  valorAlt: string;
  tiempo: string;
  descripcion: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ nombreImagen, valorAlt, tiempo, descripcion }) => {
  return (
    <div className="item">
      <div className="avatar">
        <img alt={valorAlt} src={`/images/${nombreImagen}.jpg`} />
      </div>
      <span className="time">{tiempo}</span>
      <p>{descripcion}</p>
    </div>
  );
};

export default ActivityItem;