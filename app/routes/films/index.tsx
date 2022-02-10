import { Form, Link, LinksFunction, LoaderFunction, MetaFunction, useLoaderData } from "remix"
import { getAllFilms, Film } from "~/api/films";

// SERVER SIDE
export const loader: LoaderFunction = async({request}) =>{
    const url = new URL(request.url);
    const title = url.searchParams.get('title');
    return getAllFilms(title);
}


//CLIENT SIDE
export default function indexFilms(){

    const films = useLoaderData<Film[]>();


    return(
        <div className="bg-slate-900 min-h-screen ">
            <div className="bg-slate-800  flex py-3 px-10 fixed top-0 z-10 w-full items-center">
                
                <h2 className="text-white text-lg font-bold">Films Global Dunia</h2>
                
                <Form method="get" reloadDocument className="ml-auto w-7/12">
                    <label className="text-white mr-4" htmlFor="">Search</label>
                    <input type="text" placeholder="Type a title......" name="title" className="text-gray-300 w-9/12 p-1 px-3 bg-slate-600 rounded-md"/>
                    <button className="bg-blue-900 hover:bg-blue-700 mx-3 px-2 py-1 rounded-md text-blue-100" type="submit">Search</button>
                </Form>

                <ul className="flex gap-6">
                    <li className="text-gray-400 hover:text-white"><Link to="films" className="">Beranda</Link></li>
                    <li className="text-gray-400 hover:text-white"><Link to="" className="">Genre</Link></li>
                    <li className="text-gray-400 hover:text-white"><Link to="" className="">Country</Link></li>
                </ul>

            </div>
            <div className="ml-3 mr-3 pt-28 grid grid-cols-6 gap-6 font-sans">
            {films.map((film) =>{
                return(
                    <Link 
                    title={film.title}  
                    key={film.id}  
                    to={film.id} 
                    prefetch="render"
                    className="font-sans rounded-lg relative hover:shadow-lg hover:scale-105">
                        <img src={film.image} className="rounded-lg" alt={film.title} />
                        <h2 className="m-2 text-white text-lg relative bottom-20 text-center hover:font-bold">{`${film.title} (${film.release_date})`}</h2>
                            <p className="absolute top-2 right-3 bg-amber-400 p-1 rounded-sm" style={{fontSize: 11}}>{film.running_time} Minute</p>
                            <div className="absolute top-0 left-0 py-1 px-2 bg-black bg-opacity-40 flex">
                                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" width={14} height={5} alt="" />
                            <p style={{fontSize: 10}} className=" text-white ml-2">{film.rt_score}</p>
                            </div>
                    </Link>
                )
            })}
        </div>
        </div>
    )
}