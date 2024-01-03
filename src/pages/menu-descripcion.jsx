import TargetInfo from '../components/target-info'
import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export default function MenuDescripcion({datos}) {
  const API_KEY = "36b99948d84527d505cd22efc5e25e49";
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [videos, setVideos] = useState();
  const [trailer, setTrailer] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getTarget = (id) => {
    if (datos && datos.results) {
      const filtrar=datos.results.filter((item) => item.id === parseInt(id, 10))
      setData(filtrar);
    }
  };
  
  useEffect(() => {
      //console.log("datos d",datos)
      getTarget(id)
      
    }, [datos,id]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_KEY}`);
          const data = await response.json();
          setVideos(data.results);
          setIsLoading(false);
        } catch (err) {
          console.error(err);
        }
      };
      fetchData();
    }, [id]);

    useEffect(() => {
      if (!isLoading) {
        const trailerVideo = videos.find(item => item.type == "Trailer");
        setTrailer(trailerVideo);
      }
    }, [isLoading]);

  return (
    <div className='contenedor-descripcion'>
      <h1 className='titulo-menu'>🎬Peliculas</h1>
      <div className='contenedor-target'>
        <TargetInfo
        data={data[0]}
        />
      </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        <iframe
          width="640"
          height="360"
          src={trailer&&`https://www.youtube.com/embed/${trailer.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",            
          }}
        />
      </div>
      

    </div>
  )
}

MenuDescripcion.propTypes={
  id:PropTypes.number,
  datos:PropTypes.object,
}