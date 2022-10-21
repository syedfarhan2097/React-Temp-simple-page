// const Button = (props) =>{
    import "./Button.css";
    const ButtonSecondry = ({value}) =>{
    
        return(
            <div className="button-sec">
              {/* <button>{props.value}</button> */}
              <button className="btn">{value}</button>
            </div>
        )
    }
    export default ButtonSecondry;