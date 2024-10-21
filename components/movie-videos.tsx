async function getVideos(id:string){
    const res = await fetch(`${API_URL}/movies/${id}/videos`);
    return res.json();
}

export default async function MovieVideos({id}:{id:string}){
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
}
