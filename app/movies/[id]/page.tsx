import { API_URL } from "../../home/page"

async function getMovie(id:string){
    const res = await fetch(`${API_URL}/movies/${id}`);
    return res.json();
}

async function getVideos(id:string){
    const res = await fetch(`${API_URL}/movies/${id}/videos`);
    //throw new Error("Error");
    return res.json();
}

export default async function MovieDetail({
    params: {id},
}: {
    params: {id: string}
}){
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return ( 
        <div>
            <h6>{movie.title}</h6>
            <h6>{JSON.stringify(videos)}</h6>
        </div> 
        )
}