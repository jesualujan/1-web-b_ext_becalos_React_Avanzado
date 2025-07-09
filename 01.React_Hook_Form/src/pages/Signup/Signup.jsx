import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import reactLogo from '@/assets/react.svg'

//Definimos el esquema de validación con Yup
const userFormSchema = yup.object({
    firstName: yup.string().required('El nombre es obligatorio'),
    lastName: yup.string().required('El apellido es obligatorio'),
    dob: yup.date().required('La fecha de nacimiento es obligatoria').max(new Date(), 'La fecha de nacimiento no puede ser mayor a la fecha actual'),
    email: yup.string().email('Correo electrónico no válido').required('El correo electrónico es obligatorio'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
  }).required();

const Signup = () => {
    const navigate = useNavigate();

    // usamos useForm con el esquema de validación de yup
    const { 
        register, 
        handleSubmit,
        formState: { errors },
 } = useForm({
 resolver: yupResolver(userFormSchema)
 });

 
  //Función que maneja el envío del formulario
  const onSubmit = (data) => {
    console.log('Datos enviados', data)
    //redirigimos
    navigate("/login")
  }


  return (
    <div className="max-w-md mx-auto mt-16 p-10 bg-white rounded-xl shadow-xl border border-gray-200">
    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
        <span className="inline-flex items-center justify-center gap-2">
            <img
            src={reactLogo}
            alt="React Logo"
            className="w-10 h-10 animate-spin"
            />
        Crear Cuenta
        </span>
    </h2>
    <form onSubmit={handleSubmit(onSubmit)}className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-600 mb-1">Nombre</label>
          <input 
            id="firstName"
            type="text"
            placeholder="Nombre"
            {...register('firstName')}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
          />
          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-600 mb-1">Apellido</label>
          <input 
            id="lastName"
            type="text"
            placeholder="Apellido"
            {...register('lastName')}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
          />
          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
        </div>
      </div>
  
      <div>
        <label htmlFor="dob" className="block text-sm font-medium text-gray-600 mb-1">Fecha de nacimiento</label>
        <input 
          id="dob"
          type="date"
          {...register('dob')}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
        />
        {errors.dob && <p className="text-sm text-red-500">{errors.dob.message}</p>}
      </div>
  
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">Correo electrónico</label>
        <input 
          id="email"
          type="email"
          placeholder="Correo electrónico"
          {...register('email')}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>
  
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Contraseña</label>
        <input 
          id="password"
          type="password"
          placeholder="Contraseña"
          {...register('password')}
          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition ease-in-out duration-200"
        />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>
  
      <button 
        type="submit" 
        className="w-full py-3 bg-black text-white font-medium rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutal-600 transition duration-200"
      >
        Crear Cuenta
      </button>
    </form>
  </div>  
  )
}

export default Signup