import Card from './components/Card';
import { getTrendingMovies } from './utils/requests';


export default async function Home() {
  const movies = await getTrendingMovies();
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between p-24">
      <h1 className='flex text-black text-2xl font-semibold'>Top Trending Movies</h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map(movie => {
            return <Card movie={movie} />
          })}
        </div>
      </div>
    </main>
  );
}