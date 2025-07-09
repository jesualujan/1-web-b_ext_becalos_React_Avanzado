import { Link } from 'react-router-dom'

const Navbar = ({user, setUser}) => {
   
const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
}

    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold tracking-wide">React Hook Form</h1>
                <div className="space-x-4">
                    <Link to="/" className='hover:text-indigo-400 transition-colors'>Inicio</Link>
                    {!user ? (
                        <>
                        <Link to="/login" className="hover:text-indigo-400 transition-colors">Inicia Sesión</Link>
                    <Link to="/signup" className="hover:text-indigo-400 transition-colors">Regístrate</Link>
                        </>
                    ) : (
                        <button
                        onClick={handleLogout}
                        className='bg-red-600 px-4 p-y-1 rounded hover:bg-red-800 transition'>
                            Logout
                        </button>
                    )}
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;