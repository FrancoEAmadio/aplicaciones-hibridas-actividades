import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { iniciarSesion } from '../service/api.js'

const Login = () => {
  const navigate = useNavigate()
  const [mensaje, setMensaje] = useState('')
  const [usuario, setUsuario] = useState({
    email: '',
    clave: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setUsuario({ ...usuario, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const resultado = await iniciarSesion(usuario.email, usuario.clave)
      localStorage.setItem('token', resultado.datos)
      navigate('/')
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <section className="auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={usuario.email} onChange={handleChange} required />

        <label htmlFor="clave">Contraseña</label>
        <input type="password" id="clave" name="clave" value={usuario.clave} onChange={handleChange} required />

        <button type="submit">Iniciar Sesión</button>
      </form>
      {mensaje && <p className="msg error">{mensaje}</p>}
    </section>
  )
}

export default Login
