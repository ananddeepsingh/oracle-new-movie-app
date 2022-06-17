

const MovieTile = ({
  src,
  height,
  width,
  title,
  handleClick,
}) => {

  return <div onClick={() => handleClick(title)}>
    <img
      src={src}
      height={height}
      width={width}
      alt={title}
    />
    <p>{title}</p>
  </div>
}

export default MovieTile;
