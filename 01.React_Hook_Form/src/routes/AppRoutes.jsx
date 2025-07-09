import{Routes, Route} from 'react-router-dom'
import Login from '@/pages/Login/Login'
import Signup from '@/pages/Signup/Signup'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<h1 className="text-center text-3xl"> Bienvenido a mi App</h1> }/>
    </Routes>
  )
}

export default AppRoutes