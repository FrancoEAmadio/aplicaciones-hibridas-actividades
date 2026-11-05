import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <Nav />
      <main className="contenido">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
