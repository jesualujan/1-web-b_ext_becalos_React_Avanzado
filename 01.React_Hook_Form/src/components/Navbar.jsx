import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold tracking-wide">React Hook Form</h1>
                <div className="space-x-4">
                    <Link to="/login" className="hover:text-indigo-400 transition-colors">Iniciar Sesión</Link>
                    <Link to="/signup" className="hover:text-indigo-400 transition-colors">Registrarse</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;