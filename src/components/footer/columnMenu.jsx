import React from 'react'
import { menus } from '../../data'

const ColumnMenu = () => {
  return (
    <ul>
        { menus.map((data) => (
        <li key={data.id}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
            <a href="">{data.title}</a>
        </li>
        ))}
    </ul>
  )
}

export default ColumnMenu