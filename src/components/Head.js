import ButtonPrimery from "./ButtonPrimery";
import "./Head.css"
const Head = () => {
  return (
    <div className="header">
      <div className="header-left">ToolM5</div>
      <div className="header-right">
        <div className="header-links">
          <span>About us</span>
          <span>Services</span>
          <span>Contacts</span>
        </div>
        <div className="header-icons">
          <img src="img/fb.png" />
          <img src="img/tw.png" />
          <img src="img/in.png" />
        </div>
        <ButtonPrimery value="Get Started"></ButtonPrimery>
      </div>
    </div>
  );
};
export default Head;
