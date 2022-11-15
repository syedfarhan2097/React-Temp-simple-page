import Card from "./Card";
import { useState } from "react";
import "./Work.css";
import ButtonPrimery from "./ButtonPrimery";
const CardUltra = () =>{
  const [show, setShow ] = useState(true);
    return <>
               {show ? (
         <Card>
         <img src="img/shirt-main-img.png" />
         <h2>Unique T-Shirt</h2>
         <div className="buttons-wraper">
           <button className="white-bg-btn btn" type="submit">
             Buy for 59$
           </button>
           <div className="button-prim">
           <ButtonPrimery btnClick={()=>setShow(!show)} value="Get Started"></ButtonPrimery>
           </div>
         </div>
       </Card>
       ):(
        <Card>
        <p className="unique-para">Unique T-Shirt Design</p>
        <p className="unique-heading">
          Loram ipsum dolor sit amit, Loram ipsum dolor sit amitLoram ipsum
          dolor sit amit, Loram ipsum dolor sit amit Loram ipsum dolor sit
          amit, Loram ipsum dolor sit amitLoram ipsum dolor sit amit, Loram
          ipsum dolor sit amitLoram ipsum dolor sit amit, Loram ipsum dolor
          sit amitLoram ipsum dolor sit amit, Loram ipsum dolor sit amitLoram
          ipsum dolor sit amit, Loram ipsum dolor sit amit Loram ipsum dolor
          sit amit, Loram ipsum dolor sit amit
        </p>
        <div className="buttons-wraper">
          <button className="white-bg-btn btn" type="submit">
            Buy for 59$
          </button>
          <ButtonPrimery btnClick={()=>setShow(!show)} value="Get Started"></ButtonPrimery>
        </div>
      </Card>
       )};
    </>
}
export default CardUltra;
