import { useSongContext } from '@/hook/useSongContext'

const SongList = () => {
    const { list, loading, setSelectedSong, search } = useSongContext();
    
    const filteredSongList = list.filter((song) => 
      song.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="overflow-y-auto scroll-smooth px-6 py-4 bg-zinc-950 rounded-xl scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
      {loading ? (
        <h2 className="text-center text-zinc-200 text-base font-medium animate-pulse tracking-wide">
          Cargando...
        </h2>
      ) : (
        filteredSongList.map((song) => (
          <article
            key={song.id}
            className="px-5 py-4 mb-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-200 cursor-pointer border border-zinc-800"
            onClick={() => setSelectedSong(song)}
          >
            <h3 className="text-zinc-100 text-sm font-semibold tracking-tight">{song.title}</h3>
            <h4 className="text-zinc-400 text-xs mt-1">{song.artist}</h4>
          </article>
        ))
      )}
    </section>
      )
}

export default SongList;