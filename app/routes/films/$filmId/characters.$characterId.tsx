import { json, LoaderFunction, MetaFunction, useCatch, useLoaderData } from "remix"
import invariant from "tiny-invariant"
import { FilmCharacter, getFilmChars } from "~/api/films";


export const meta: MetaFunction = ({data}) =>{
    return { title: data.title, description: data}
}

export let loader: LoaderFunction =async ({params}) => {
    invariant(params.characterId, 'exepected params.characterId');

    // throw json("Not Found", {status: 404});
    return getFilmChars(params.characterId);

}


export default function Character(){
    const char = useLoaderData<FilmCharacter>();
    return(
        <div className="mb-3">
            <div className="text-3xl mb-2">
                Character Detils
            </div>
            <div className="p-4 rounded shadow-lg border border-gray-400">
                {char.name}
                <ul className="py-2">
                    <li>Gender: {char.gender}</li>
                    <li>Age: {char.age}</li>
                    <li>Eye Color: {char.eye_color}</li>
                    <li>Hair Color: {char.hair_color}</li>
                </ul>
            </div>
        </div>
    )
}

export function CatchBoundary(){
    const caught = useCatch();

    if(caught.status == 404){
        return(
            <div className="mb-3">
            <div className="text-2xl mb-2">Detail</div>
            <div className="p-4 rounded shadow-slate-600 border bg-slate-500 border-slate-900">
                <div className="text-gray-700 font-bold text-xl mb-2">
                    {caught.statusText}
                </div>
                <p>{caught.status} {caught.statusText}</p>
            </div>
        </div>
        )
    }
    throw new Error("unknow Error");
    
}


export function ErrorBoundary({error}:any){
    return(
        <div className="mb-3">
            <div className="text-2xl mb-2">Detail</div>
            <div className="p-4 rounded shadow-slate-600 border bg-slate-500 border-slate-900">
                <div className="text-gray-700 font-bold text-xl mb-2">
                    Oh Sorry Something Was Wrong
                </div>
                <p>{error.message}</p>
            </div>
        </div>
    )
}