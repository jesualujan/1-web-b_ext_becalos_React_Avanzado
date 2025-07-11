//* 3) Crear un hook para usar o consumir el contexto de la lista de canciones
//consumidor
import { useContext } from 'react' 
// contexto a consumir
import { SongContext } from '@/context/SongContext'; 

// hacer el export de una función 
export const useSongContext = () => {
    // guardo mi contexto en una constante 
    const context = useContext(SongContext) //quiero consumir mi contexto usando useContexto() y le indico cual es mi contexto useSongContext(SongContext)

    // si no hay contexto, si es undefined (vacío) lanza un error
    if(!context){
        throw new Error('useSongContext debe usarse dentro de un <SongProvider>')
    }
    return context
}