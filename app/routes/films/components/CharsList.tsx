import { FilmCharacter } from "~/api/films";
import {Link, NavLink} from 'remix'

type CharacterList = {
    characters?: FilmCharacter[];
}


export default function CharList({characters} : CharacterList){
    return(
        <div className=" flex-1 max-w-md px-4">
            <h3 className="text-3xl">Character</h3>
            <ul className="flex flex-col space-y-3 my-3">
                {characters?.map((character) =>(
                    <li key={character.id}>
                        <NavLink prefetch="intent" to={`characters/${character.id}`} 
                        className={({ isActive }) => 
                                `w-full hover:underline p-3 rounded border border-slate-500 inline-block ${
                                    isActive 
                                    ? 'text-white font-bold border-2' 
                                    : 'text-slate-500' }`
                            } 
                                
                                >
                        {character.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}