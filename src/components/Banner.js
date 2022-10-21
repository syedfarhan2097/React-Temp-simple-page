import ButtonSecondry from "./ButtonSecondry";
import "./Banner.css";
const Banner = (props) => {
  return (
    <div className="banner-bg-main">
      <h5>{props.text_1}</h5>
      <h2>{props.text_2}</h2>
      <ButtonSecondry value="Get Started"></ButtonSecondry>
      <p className="span_link">{props.link}</p>
      <span className="span_discription">{props.discription}</span>
    </div>  
  );  
};

export default Banner;
