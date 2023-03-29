import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const AppHeader: FC = () => {
  return (
    <header className='app-header'>
      <nav>
        <NavLink to={'/'}>HomePage</NavLink>
      </nav>
    </header>
  )
}
