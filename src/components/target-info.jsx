import { useEffect,useState } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TargetInfo({data}) {
  const API_KEY = "36b99948d84527d505cd22efc5e25e49";

  const [generos, setGeneros] = useState([]);
  const [generoResult, setGenerosResult] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fecthData=async () =>{
      try{
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${API_KEY}`)
        const data = await response.json();
        setGeneros(data)
        setIsLoading(false);
      }
      catch (err){
        console.error(err);      
      }
  }
  fecthData();
  console.log("genero",generos)
  }, [data]);
 

  
  const getGenero=(()=>{
    if (data && data.genre_ids && generos.genres) {
      const filteredGenres = generos.genres.filter(item => data.genre_ids.includes(item.id));
      setGenerosResult(filteredGenres);
    }
  })

  useEffect(() => {
    if (!isLoading) {
      getGenero();
      console.log(generoResult)
    }
  }, [isLoading]);

  return (
    <>
      <div className="contenedor-descripcion-target">
        <div className="contenedor-img-descripcion">
          <img src={data&&`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`} alt=""/>
        </div>
        <div>
          <h3 className="titulo">Titulo: {data? data.title:"No Seleccionado"}</h3>
          <p className="genero"><b>Género:</b> {generoResult? generoResult.map((item)=>item.name).join(", "):"No Seleccionado"}</p>
          <p><b>Descripción:</b> {data? data.overview:"No Seleccionado"}</p>
          <Link to={`/`} underline="none" style={{ textDecoration: 'none', color: 'white' }}>
          <button className="boton-volver">Volver</button>
          </Link>
        </div>
      </div>
    </>
  )
}

TargetInfo.propTypes={
  data:PropTypes.object,
}