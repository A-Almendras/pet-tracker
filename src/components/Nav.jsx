import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import AuthUserContext from '../context/AuthUserContext'

const Nav = () => {
  let { user, logout } = useContext(AuthUserContext)
  console.log(user.username)
  const items = [
    {
      title: 'Profile',
      path: `/user/${user.username}`
    },
    {
      title: 'Pets',
      path: '/pets'
    },
    {
      title: 'Logout',
      path: '/'
    }
  ]
  return (
    <div className="navbar">
      {items.map((item, index) => (
        <li key={index}>
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <span>{item.title}</span>
          </NavLink>
        </li>
      ))}
      <p onClick={logout}>{items[2].title}</p>
    </div>
  )
}

export default Nav
