import { useSongContext } from '@/hook/useSongContext'
import { FiSearch, FiShuffle, FiSkipBack, FiSkipForward, FiMusic } from 'react-icons/fi'

const Header = () => {
  const { list, selectedSong, setSelectedSong, setSearch } = useSongContext()

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const nextSong = () => {
    const songIndex = list.findIndex(s => s.id === selectedSong.id)
    list.length > songIndex + 1
      ? setSelectedSong(list[songIndex + 1])
      : setSelectedSong(list[0])
  }

  const prevSong = () => {
    const songIndex = list.findIndex(s => s.id === selectedSong.id)
    songIndex > 0
      ? setSelectedSong(list[songIndex - 1])
      : setSelectedSong(list[list.length - 1])
  }

  const shuffle = () => {
    const randomIndex = Math.floor(Math.random() * list.length)
    setSelectedSong(list[randomIndex])
  }

  return (
    <>
     <div className="w-full px-6 py-4 bg-zinc-900 border-b border-zinc-800 flex flex-col gap-6 ">
  {list.length > 0 ? (
    <>
      {/* Search Input */}
      <div className="flex items-center gap-2 bg-zinc-800 rounded-md px-3 py-2">
        <FiSearch className="text-zinc-400 text-lg" />
        <input
          className="bg-transparent outline-none text-sm text-zinc-200 placeholder-zinc-500 flex-1"
          type="search"
          placeholder="Search a Song..."
          onChange={handleSearch}
        />
      </div>

      {/* Now Playing Info */}
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <FiMusic className="text-green-400 text-lg" />
        <span className="font-medium tracking-wide">Now playing:</span>
        <span className="text-zinc-200">{selectedSong.title} — {selectedSong.artist}</span>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4">
        <button
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 text-zinc-200"
          onClick={shuffle}
        >
          <FiShuffle />
          Shuffle
        </button>

        <button
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 text-zinc-200"
          onClick={prevSong}
        >
          <FiSkipBack />
          Prev
        </button>

        <button
          className="flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200 text-zinc-200"
          onClick={nextSong}
        >
          <FiSkipForward />
          Next
        </button>
      </div>
    </>
  ) : (
    <h2 className="text-center text-zinc-300 text-base font-medium animate-pulse">Cargando...</h2>
  )}
</div>
    </>
  )
}
export default Header