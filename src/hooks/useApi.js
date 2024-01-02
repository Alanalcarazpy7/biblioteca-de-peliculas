
export async function FetchData(setDatos) {
  const URL="https://api.themoviedb.org/3/";
  const API_KEY = "36b99948d84527d505cd22efc5e25e49";

    try{
      const response =await fetch(`${URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
      const data=await response.json()
      setDatos(data);
    }
    catch(error){
      console.error("No se pudo conectar a la Api")
    }
}
