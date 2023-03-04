import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './pages/home-page'

export function RootCmp() {
  return (
    <div className='App'>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}
