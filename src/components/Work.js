import ButtonPrimery from "./ButtonPrimery";
import "./Work.css";
const Work = () => {
  return (
    <div className="bg-black">
      <h3>How it Works?</h3>
      <div className="card-main">
        <div className="card">
          <div className="card-wrap">
            <img src="img/shirt-main-img.png" />
            <h2>Unique T-Shirt</h2>
            <div className="buttons-wraper">
              <button className="white-bg-btn btn" type="submit">
                Buy for 59$
              </button>
              <ButtonPrimery value="Get Started"></ButtonPrimery>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-wrap">
            <p className="unique-para">Unique T-Shirt Design</p>
            <p className="unique-heading">
              Loram ipsum dolor sit amit, Loram ipsum dolor sit amitLoram ipsum
              dolor sit amit, Loram ipsum dolor sit amit Loram ipsum dolor sit
              amit, Loram ipsum dolor sit amitLoram ipsum dolor sit amit, Loram
              ipsum dolor sit amitLoram ipsum dolor sit amit, Loram ipsum dolor
              sit amitLoram ipsum dolor sit amit, Loram ipsum dolor sit
              amitLoram ipsum dolor sit amit, Loram ipsum dolor sit amit Loram
              ipsum dolor sit amit, Loram ipsum dolor sit amit
            </p>
            <div className="buttons-wraper">
              <button className="white-bg-btn btn" type="submit">
                Buy for 59$
              </button>
              <ButtonPrimery value="Get Started"></ButtonPrimery>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
