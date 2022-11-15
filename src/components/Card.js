import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-wrap">{props.children}</div>
      </div>
    </>
  );
};
export default Card;
