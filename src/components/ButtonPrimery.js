// const Button = (props) =>{
import "./Button.css";
const ButtonPrimery = (props) => {
  return (
    <div className="button-prim">
      {/* <button>{props.value}</button> */}
      <button onClick={props.btnClick}>{props.value}<img src="img/btn-arrow.png"/></button>
    </div>
  );
};
export default ButtonPrimery;
