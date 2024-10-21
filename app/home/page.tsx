import Link from "next/link";

export const metadata = {
    title: "Home",
    description: "Home page"
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev";

async function getMovies(){
    //throw new Error("Error");
    //await new Promise(resolve=>setTimeout(resolve, 1000))
    return fetch(`${API_URL}/movies`).then(res=>res.json());
}

export default async function Home(){
    const movies = await getMovies();
    return ( 
    <div>
        {  
            movies.map((movie)=>(
            <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
        ))}
    </div>
    )
}