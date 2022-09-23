import React from 'react';

const Sidebar = ({ nombre, apellido, email }) => {

  return (
    <>
      <div className="divSidebar">
        <ul>
          <li><h4 style={{ color: "blue" }}>{nombre}</h4></li>
          <li><h4 style={{ color: "blue" }}>{apellido}</h4></li>
          <li><h4 style={{ color: "blue" }}>{email}</h4></li>
          <li>elemento</li>
          <li>elemento</li>
          <li>elemento</li>
          <li>elemento</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar