import { Navigate, Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { AppHeader } from './cmps/app-header'
import { Backoffice } from './pages/backoffice'
import { HomePage } from './pages/home-page'

export const RootCmp: FC = () => {
  return (
    <div className='App'>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/backoffice' element={<Backoffice />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  )
}
