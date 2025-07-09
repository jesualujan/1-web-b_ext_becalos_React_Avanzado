import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import reactLogo from '@/assets/react.svg'
// Componente login recibe setUser como prop para actualizar la sesión
const Login = ({setUser}) => {
      // Hook para redirigir a otra ruta después del login
    const navigate = useNavigate();

    const { 
        register, 
        handleSubmit,
        formState: { errors },
 } = useForm();

  //Función que maneja el envío del formulario
  const onSubmit = (data) => {
    const { email, password } = data
    console.log(email, password)

     // Simulación de inicio de sesión exitoso
     const fakeUser = {email}
     //Guardar el usuario en un estado global
     setUser(fakeUser);
     //Guardo el usuario en localStorage (datos persisten en el navegador)
     localStorage.setItem("user", JSON.stringify(fakeUser))
     // Redirigir al usuario a la página de inicio
     navigate("/")
  }



  return (
    <div className="max-w-lg mx-auto mt-16 p-10 bg-white rounded-xl shadow-2xl border border-gray-100">
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        <span className="inline-flex items-center justify-center gap-2">
            <img
            src={reactLogo}
            alt="React Logo"
            className="w-10 h-10 animate-spin"
            />
        Iniciar Sesión
        </span>
    </h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Correo electrónico</label>
        <input 
          id="email"
          name="email"
          type="text"
          placeholder="Correo electrónico"
          {...register('email', {required: 'El correo electrónico es obligatorio'})}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
        />
         {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
      
      <div>
        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Contraseña</label>
        <input 
          id="password"
          name="password"
          type="password"
          placeholder="Contraseña"
          {...register('password', {required: 'La contraseña es obligatoria'})}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
        />
         {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>
      
      <div className="flex items-center justify-between">
        <label className="text-sm text-gray-500">
          <input type="checkbox" className="mr-2 leading-tight" /> Recordar mi sesión
        </label>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 transition">¿Olvidaste tu contraseña?</a>
      </div>

      <button 
        type="submit" 
        className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutal-600 transition duration-200"
      >
        Iniciar Sesión
      </button>
    </form>

    <div className="mt-6 text-center">
      <p className="text-sm text-gray-600">
        ¿No tienes cuenta?{' '}
        <a href="/signup" className="text-indigo-600 hover:text-indigo-700">Regístrate aquí</a>
      </p>
    </div>
  </div>
  )
}

export default Login