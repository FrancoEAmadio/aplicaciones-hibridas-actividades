import { useState, useEffect } from 'react'
import { obtenerPuntos } from '../service/api.js'

const Home = () => {
  const [puntos, setPuntos] = useState([])
  const [mensaje, setMensaje] = useState('')

  useEffect(() => {
    async function getPuntos() {
      try {
        const result = await obtenerPuntos()
        setPuntos(result.datos)
      } catch (error) {
        setMensaje(error.message)
      }
    }

    getPuntos()
  }, [])

  return (
    <>
      <h2>Home</h2>
      {mensaje && <p className="msg error">{mensaje}</p>}
      <div className="container">
        {puntos.map((punto) => (
          <div className="card" key={punto._id}>
            <h4>{punto.titulo}</h4>
            <ul>
              <li>{punto.latitud}</li>
              <li>{punto.longitud}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
