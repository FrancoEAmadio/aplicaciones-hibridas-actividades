import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="notfound">
      <h2>Página no encontrada</h2>
      <h3>Error 404</h3>
      <Link to="/">Volver al Home</Link>
    </section>
  )
}

export default NotFound
