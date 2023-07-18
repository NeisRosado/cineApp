import React from 'react'
import "./list.scss"

const List = () => {
  return (
    <div className="lista">
      <ul className={`lista__ol ${className}`}>
        {list.map((listado) => (
          <li className={`lista__ol-li ${className}`} key={listado.id}>
            {listado.name}
            {listado.opciones}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List