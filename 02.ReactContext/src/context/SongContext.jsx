import {createContext, useState, useEffect, Children} from 'react';
import canciones from '@/utils/listaCanciones.json'

//* 1) Crear el contexto
const SongContext = createContext() // crear mi contexto que empieza vacío

//* 2) Crear el provider
// el provider es un componente que envuelve a todos los compontes
// que van a tener acceso al contexto

function SongProvider ({children}) {
    const [list, setList] = useState([]); // estado que va a contener la lista de canciones
    const [loading, setLoading] = useState(true) // estado ¿Está cargando la lista de canciones?
    const [selectedSong, setSelectedSong] = useState({}); // estado que va a contener la canción seleccionada
    const [search, setSearch] = useState('') // identifica la palabara que pongo en el buscador

    // simular llamada a la API (mock delay de 2s)
    useEffect(() =>{
        const timer = setTimeout(() => {
            setList(canciones)
            setLoading(false)
        }, 2000)
        return () => clearTimeout(timer) // cleaner (limpieza) buena práctica
    },[])

    // mandamos un objeto
    const contextValue = {
        list,
        loading,
        selectedSong,
        setSelectedSong,
        search,
        setSearch
    }

    //el proveedor (provider) es un componente que envuelve a otros componentes
    //y le pasa un objeto con los datos que queremos compartir
    return (
        //return de un componente
        <SongContext.Provider value={contextValue}>
            {children}
        </SongContext.Provider>
    )
}

export { 
    SongContext, // exporto el contexto
    SongProvider // exporto el proveedor
}