import PropTypes from 'prop-types';

export default function Target({image,title,onClick,id}) {
  const handleClick = (event) => {
    onClick(event, id);
  };

  return(
    <div className="contenedor-tarjetas" onClick={handleClick}>
      <img src={image} alt={title}/>
      <h2>{title}</h2>
    </div>
  )
}


Target.propTypes={
  image:PropTypes.string,
  title:PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
};