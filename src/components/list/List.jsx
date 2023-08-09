import React from "react";
import './list.scss';

const List = ({ list , className}) => {
  return (
    <div className="lista">
      <ol className={`lista__ol ${className}`}>
        {list.map((listado) => (
          <li className={`lista__ol-li ${className}`} key={listado.id}>
            {listado.name}
            {listado.img}
          </li>
        ))}
      </ol>
      
    </div>
  );
};

export default List;
