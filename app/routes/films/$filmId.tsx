
import { LoaderFunction, Outlet, useLoaderData, useParams} from "remix"
import { getDetailFilm, Film } from "~/api/films"
import invariant from "tiny-invariant";
import FilmBanner from "./components/FilmBanner";
import CharList from "./components/CharsList";

export const loader:LoaderFunction = async ({params}) =>{
    invariant(params.filmId, 'expected params.filmId');

    const film = await getDetailFilm(params.filmId);
    return film ;
}

export default function Film(){
    const film = useLoaderData<Film>();
    return (
        <div className="relative">
            <img 
            className="-z-10 h-auto w-full container opacity-90 absolute"
            src="https://c.wallhere.com/photos/65/5c/anime_sky_landscape_clouds_portrait_display_urban-1685799.jpg!d"
            alt="" />
            <div className="m-auto w-11/12 bg-opacity-80 bg-slate-900 text-white">
                <FilmBanner film={film} />

                <div className="px-4 ">
                    <div className="mt-10">
                        <h4 className="text-2xl">Description</h4>
                        <p className="text-lg text-center ">{film.description}</p>    
                    </div>
                    
                    <div className="flex py-5 space-x-5">
                    <CharList characters={film.character}/>

                    <div className="flex-1">
                        <Outlet/>    
                    </div>
                </div>

                </div>
                
            </div>
        </div>
    )
}