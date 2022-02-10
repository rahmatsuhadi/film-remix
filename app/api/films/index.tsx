export type FilmCharacter = {
   id: string;
   name: string;
   gender?: string;
   age?: string;
   eye_color?: string;
   hair_color?: string;
}

export type Film = {
    id: string;
    title: string;
    original_title: string;
    description: string;
    image: string;
    movie_banner: string;
    people: string[];
    release_date: number;
    running_time: number;
    rt_score: number;
    character?: FilmCharacter[];
  };

export async function getAllFilms(title?:string | null) {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const films: Film[] = await response.json()

    return films.filter((film) =>
      title ? film.title.toLowerCase().includes(title.toLowerCase()) : true
    )

}


export async function getDetailFilm(filmId:string) {
  console.log(filmId, "id")
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/${filmId}`
    );
    
  const film:Film = await response.json();
  
  const character = await Promise.all(
    film.people
    .filter((url) => url !== 'htttps://ghibliapi.herokuapp.com/people/')
    .map((url) => fetch(url).then((res) => res.json()))    
  )
  
  return {...film, character};
}

export async function getFilmChars(characterId: string):
  Promise<FilmCharacter>{
    const res = await fetch(
      `https://ghibliapi.herokuapp.com/people/${characterId}`
    );

    if(!res.ok){
      throw res;
    }
    return res.json();
  }
