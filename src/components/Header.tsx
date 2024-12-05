import React from "react";
interface HeaderProps {
    title: string;
  }
const Header: React.FC<HeaderProps>= ({title}) => {
  return (
    // <div className="header">
    //   <div className="menuIcon">
    //     <div className="dashTop"></div>
    //     <div className="dashBottom"></div>
    //     <div className="circle"></div>
    //   </div>
    //   <h1>Registro de Tareas</h1>
    //   <input type="text" className="searchInput" placeholder="Buscar ..." />
    //   <div className="fa fa-search searchIcon"></div>
    // </div>
    // <div className="header">
    //   <div className="menuIcon">
    //     <div className="dashTop"></div>
    //     <div className="dashBottom"></div>
    //     <div className="circle"></div>
    //   </div>
    //   <h2>{title}</h2>
    //   <input type="text" className="searchInput" placeholder="Buscar ..." />
    //   <div className="fa fa-search searchIcon"></div>
    // </div>
    <div className="d-flex justify-content-between gap-2 align-items-center bg-primary text-white p-3 mb-2 rounded">
      {/* Left Icon */}
      <div className="d-flex align-items-center ml-3">
        <i className="fa fa-bars me-3"></i>
        <h5 className="mb-0">{title}</h5>
      </div>
      {/* Right Icon */}
      <i className="fa fa-search"></i>
    </div>
  );
};

export default Header;
