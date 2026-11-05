import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" end>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/login">Ingresar</NavLink>
        </li>
        <li>
          <NavLink to="/registro">Registrarme</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
