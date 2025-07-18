// userService es donde simularemos hacer la llamada a la API y para esto samos axios
// necesitamos pasarle un endpoint para que traiga los datos de la API.

//importamos la instancia configurada
import axiosInstance from "./axiosConfig"

// ocupo mandar información
// registar un usuario (Signup)
const registerUserService = async (data) => {
    const response = await axiosInstance.post("/register", data)
    return response; // retornamos toda la respuesta para manejar status
}
//http://localhost/register{json}

// autenticar un usuario (Login)
const loginUserService = async (data) => {
    const response = await axiosInstance.post("/login", data)
    return response; // retornamos toda la respuesta para manejar status
}
//http://localhost/login{json}

export {
    registerUserService,
    loginUserService
}