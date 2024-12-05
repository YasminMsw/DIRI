import React from 'react';
import ActivityItem from './ActivityItem';
interface Activity {
    id: number;
    nombreImagen: string;
    valorAlt: string;
    tiempo: string;
    descripcion: string;
  }
  interface ContentProps {
    activities: Activity[];
  }
const Content: React.FC<ContentProps> =  ({ activities }) => {
  return (
    // <div className="content">
    //   <div className="line"></div>
    //   <div className="item">
    //     <div className="avatar">
    //       <img alt="Francisca" src="/images/francisca.jpg" />
    //     </div>
    //     <span className="time">Hace una hora</span>
    //     <p>Fui a comer con amigos</p>
    //   </div>
    //   <div className="item">
    //     <div className="avatar">
    //       <img alt="Paco" src="/images/paco.jpg" />
    //     </div>
    //     <span className="time">10:00 am</span>
    //     <p>Leí un artículo sobre tecnología</p>
    //   </div>
    //   <div className="item">
    //     <div className="avatar">
    //       <img alt="Quica" src="/images/quica.jpg" />
    //     </div>
    //     <span className="time">10:00 am</span>
    //     <p>Escribí notas sobre un proyecto importante</p>
    //   </div>
    //   <div className="item">
    //     <div className="avatar">
    //       <img alt="Curro" src="/images/curro.jpg" />
    //     </div>
    //     <span className="time">2:21 pm</span>
    //     <p>Preparé la presentación para la reunión de mañana</p>
    //   </div>
    // </div>
    <div className="content">
      {activities.map((activity) => (
        <ActivityItem
          key={activity.id}
          nombreImagen={activity.nombreImagen}
          valorAlt={activity.valorAlt}
          tiempo={activity.tiempo}
          descripcion={activity.descripcion}
        />
      ))}
    </div>
  );
};

export default Content;
