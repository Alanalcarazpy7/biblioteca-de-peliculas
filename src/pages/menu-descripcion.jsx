import TargetInfo from '../components/target-info'
import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

export default function MenuDescripcion({datos}) {
  
  const { id } = useParams();
  const [data, setData] = useState([]);
  
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

  return (
    <div className='contenedor-descripcion'>
      <h1 className='titulo-menu'>🎬Peliculas</h1>
      <div className='contenedor-target'>
        <TargetInfo
        data={data[0]}
        />
      </div>
      
    </div>
  )
}

MenuDescripcion.propTypes={
  id:PropTypes.number,
  datos:PropTypes.object,
}