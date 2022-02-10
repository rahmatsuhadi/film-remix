import { Link } from "remix";
import { Film } from "~/api/films";

type FilmBannerProps = {
    film: Film
}

export default function FilmBanner ({film}: FilmBannerProps){
    return(
        <div>
            <div className="w-auto h-96 overflow-hidden relative">
                <div className="w-full h-full flex flex-col absolute justify-between">
                    <Link to="/films" className="ml-4 mt-6 text-white text-xl hover:underline">
                        Back
                    </Link>
                    <div className="bg-slate-700/60 p-5">
                        <div className="text-5xl font-bold text-white">
                            {film.title}
                        </div>
                    </div>
                </div>

                <img src={film.movie_banner} alt="" 
                className="w-full h-auto"
                style={{marginTop: -100}}
                />

            </div>
        </div>
    )
}