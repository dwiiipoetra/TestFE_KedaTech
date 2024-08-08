import React from 'react'
import { menus } from '../data'

const ListMenu = () => {
  return (
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        { menus.map(data => (
            <li key={data.id} className="nav-item">
                <a className="nav-link" href={data.id}>
                    {data.title}
                </a>
            </li>
        ))}
    </ul>
  )
}

export default ListMenu