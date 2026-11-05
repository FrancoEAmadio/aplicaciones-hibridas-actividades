const API_URL = import.meta.env.VITE_API_URL || '/api'

export const obtenerPuntos = async () => {
  const res = await fetch(`${API_URL}/puntos`)
  const result = await res.json()
  if (!res.ok) {
    throw new Error(result.mensaje || 'Error al obtener los puntos')
  }
  return result
}

export const iniciarSesion = async (email, clave) => {
  const res = await fetch(`${API_URL}/usuarios/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, clave }),
  })
  const result = await res.json()
  if (!res.ok) {
    throw new Error(result.mensaje || 'No se pudo iniciar sesión')
  }
  return result
}

export const registrarUsuario = async (nombre, email, clave) => {
  const res = await fetch(`${API_URL}/usuarios/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, email, clave }),
  })
  const result = await res.json()
  if (!res.ok) {
    throw new Error(result.mensaje || 'No se pudo registrar el usuario')
  }
  return result
}
