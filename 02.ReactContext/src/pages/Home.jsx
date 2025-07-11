import SongList from '../components/SongList/SongList'
import SongDetails from '../components/SongDetails/SongDetails'
import { SongProvider } from '@/context/SongContext'
import { FiMusic, FiHeadphones} from "react-icons/fi";
const Home = () => {
    return (
        <SongProvider>
    <div className="flex min-h-screen text-zinc-100 bg-zinc-950 font-sans">
      {/* Sidebar izquierdo */}
      <aside className="basis-1/3 bg-zinc-900 border-r border-zinc-800 px-6 py-8 overflow-y-auto hover:bg-zinc-800 transition-colors ease-in-out duration-300">
        <div className="flex items-center gap-2 mb-6 select-none">
          <FiMusic className="text-zinc-400 text-xl" />
          <p className="text-xl font-semibold tracking-tight">Song List</p>
        </div>
        <SongList />
      </aside>

      {/* Área derecha */}
      <main className="flex-1 px-10 py-8 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-900">
        <div className="flex items-center gap-2 mb-6 select-none">
          <FiHeadphones className="text-zinc-400 text-2xl" />
          <p className="text-2xl font-bold tracking-tight">Song Detail</p>
        </div>
        <SongDetails />
      </main>
    </div>
  </SongProvider>
    )
}

export default Home;