import Header from "@/components/Header"
import RoutesIndex from "@/routes/RoutesIndex"
import { ToastContainer } from 'react-toastify'; //importar el contenedor de notificaciones
import 'react-toastify/dist/ReactToastify.css' // estilos por defecto de Toastify
import {AuthProvider} from "@/context/AuthContext";

function App() {

  return (
    <>
    {/* El   <ToastContainer /> es el que mostrará las notificaciones en toda la aplicación
    tienes React Toastify configurado globalment
    */}
    <ToastContainer />
    <AuthProvider>
    <Header />
     <RoutesIndex />
    </AuthProvider>
     </>
  )
}

export default App
