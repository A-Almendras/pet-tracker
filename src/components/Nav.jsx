import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import AuthUserContext from '../context/AuthUserContext'

const Nav = () => {
  let { user } = useContext(AuthUserContext)
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
      Welcome to the SideNavBar
      {items.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        ></NavLink>
      ))}
    </div>
  )
}

export default Nav
