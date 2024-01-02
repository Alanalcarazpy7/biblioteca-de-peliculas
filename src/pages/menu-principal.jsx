import Target from '../components/target'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function MenuPrincipal({datos,setId}) {
  const dato=datos;
  const [clic, setClicked] = useState(false);

  const handleClick=((event,id)=>{
    setId(id)
    setClicked(clic)
  })

  return (
    <div className='contenedor-menu'>
      <h1 className='titulo-menu'>🎬Peliculas</h1>
      <div className='contenedor-targets'>
      {dato.results && dato.results.map((item)=>(
          <Link to={`/descripcion/${item.id}`} key={item.id}>
            <Target
              image={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
              title={item.title}
              key={item.id}
              id={item.id}
              onClick={handleClick}
            />
          </Link>
        )
      )}

      </div>
    </div>
  )
}

MenuPrincipal.propTypes = {
  datos: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.number,
      })
    ),
    PropTypes.object,
  ]),
  setClicked: PropTypes.func,
  setId: PropTypes.func,
  clic:PropTypes.bool,
};