import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './views/Home'
import Login from './views/Login'
import Registro from './views/Registro'
import NotFound from './views/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
