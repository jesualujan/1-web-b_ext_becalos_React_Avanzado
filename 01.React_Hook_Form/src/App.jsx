// Hooks
import { useState , useEffect} from 'react'
// Componentes
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
// Estilos
import './App.css'



function App() {
  // Estado para guardar al usuario logueado (null si no hay sesión)
  const [user, setUser] = useState(null)
  // useEffect se ejecuta una vez al cargar la app
  useEffect(() => {
    // intenta obtener el usuario guardado en el localStorage
    const dataUser = JSON.parse(localStorage.getItem("user"))
    // si hay datos, actualiza el estado con ese usuario
    if(dataUser) setUser(dataUser)
  },[]) // El array vacío [] significa que se ejecuta solo 1 vez al montar el componente

  return (
    <>
    {/* Navbar recibe el usuario actual y la función para actualizarlo */}
     <Navbar user={user} setUser={setUser}/>
     {/* AppRoutes recibe el usuario actual y el estado de sesión */}
     <AppRoutes user={user} setUser={setUser} />
    </>
  )
}

export default App
