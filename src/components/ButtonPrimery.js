// const Button = (props) =>{
import "./Button.css";
const ButtonPrimery = ({ value }) => {
  return (
    <div className="button-prim">
      {/* <button>{props.value}</button> */}
      <button>{value}<img src="img/btn-arrow.png"/></button>
    </div>
  );
};
export default ButtonPrimery;
