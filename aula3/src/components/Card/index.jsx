const Card = (props) => {
  return (
    <>
      <div>
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
        <a href={props.link} target="_blank">Link</a>
      </div>
    </>
  );
};

export default Card;
