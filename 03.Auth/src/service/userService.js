// userService es donde simularemos hacer la llamada a la API y para esto samos axios
// necesitamos pasarle un endpoint para que traiga los datos de la API.

//importamos la instancia configurada
import axiosInstance from "./axiosConfig"

// ocupo mandar información
// registar un usuario (Signup)
// 🟢 Registrar nuevo usuario
const registerUserService = async (data) => {
    const response = await axiosInstance.post("/register", data)
    return response
  }
//http://localhost/register{json}


// 🟡 Autenticación de usuario
const loginUserService = async (data) => {
    const response = await axiosInstance.post("/login", data)
    return response
  }
//http://localhost/login{json}

// 🔵 Obtener información del usuario autenticado
const getMeUserService = async () => {
    const {data} = await axiosInstance.get("/users/me")
    return data;
}


export {
    registerUserService,
    loginUserService,
    getMeUserService
}