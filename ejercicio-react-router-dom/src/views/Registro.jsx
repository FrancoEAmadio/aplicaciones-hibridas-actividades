import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registrarUsuario } from '../service/api.js'

const Registro = () => {
  const navigate = useNavigate()
  const [mensaje, setMensaje] = useState('')
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    clave: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setUsuario({ ...usuario, [name]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { nombre, email, clave } = usuario
    try {
      await registrarUsuario(nombre, email, clave)
      navigate('/login')
    } catch (error) {
      setMensaje(error.message)
    }
  }

  return (
    <section className="auth">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" value={usuario.nombre} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={usuario.email} onChange={handleChange} required />

        <label htmlFor="clave">Contraseña</label>
        <input type="password" id="clave" name="clave" value={usuario.clave} onChange={handleChange} required />

        <button type="submit">Registrarme</button>
      </form>
      {mensaje && <p className="msg error">{mensaje}</p>}
    </section>
  )
}

export default Registro
