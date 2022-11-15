import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { useState } from "react";
import { GrAndroid, GrApple } from "react-icons/gr";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialLinkedin,
  TiSocialSkype,
  TiSocialYoutube,
} from "react-icons/ti";
import { TbSend } from "react-icons/tb";
import FooterSecTop from "./FooterSecTop";
import CopyRight from "./CopyRight";
import "./footer.css";
import { useRef } from "react";
const FooterTop = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  // const inputRef = useRef(null);
  // function handleChange() {
  //   alert(inputRef.current.value);
  // }
  const accountData = [
    {
      title: "MY ACCOUNT",
      dis: [
        { name: "Portfolio" },
        { name: "Market Alerts" },
        { name: "Price Alerts" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
      ],
    },
    {
      title: "WE ARE APMEX",
      dis: [
        { name: "Portfolio" },
        { name: "Market Alerts" },
        { name: "Price Alerts" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
        { name: "About Setting" },
      ],
    },
    {
      title: "CUSTOMER CARE",
      dis: [
        { name: "Portfolio" },
        { name: "Market Alerts" },
        { name: "Price Alerts" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
      ],
    },
    {
      title: "BUTING & SELLING",
      dis: [
        { name: "Portfolio" },
        { name: "Market Alerts" },
        { name: "Price Alerts" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
      ],
    },
    {
      title: "EDUCATION",
      dis: [
        { name: "Portfolio" },
        { name: "Market Alerts" },
        { name: "Price Alerts" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
        { name: "Product Reviewa" },
        { name: "About Setting" },
      ],
    },
  ];
  return (
    <div className="footer-top">
      <div className="footer-first">
        <div className="container">
          <div className="footer-first-wrap">
            <p>Loram ipsum dolor, Loram ipsum dolor</p>
            <div className="email-phone">
              <div className="Email">
                <HiOutlineMail />
                <span>test@email.com</span>
              </div>
              <div className="phone">
                <HiPhone />
                <span>001-xxxxxxxx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sec">
        <div className="container">
          <div className="footer-sec-wrap">
            {accountData.map((items) => {
              return <FooterSecTop title={items.title} dis={items.dis} />;
            })}
          </div>
        </div>
      </div>

      <div className="footer-third">
        <div className="footer-third-wrap">
          <div className="logo">ToolM5</div>
          <div className="text_input">
            <p>Loram ipsum,Loram ipsum,Loram ipsum,Loram ipsum</p>
            <h1>{message}</h1>
            <div class="input-wrap">
              <input type="text" onChange={handleChange} value={message} />
              <button>
                <TbSend />
              </button>
            </div>
          </div>
          <div className="icons-footer">
            <div className="icone-social">
              <TiSocialFacebook />
              <TiSocialTwitter />
              <TiSocialLinkedin />
              <TiSocialGooglePlus />
              <TiSocialYoutube />
              <TiSocialSkype />
            </div>
            <div className="icone-other">
              <div className="android">
                <GrApple />
                <span>IOS app</span>
              </div>
              <div className="android">
                <GrAndroid />
                <span>android app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};
export default FooterTop;
