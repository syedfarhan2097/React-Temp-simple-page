import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { GrAndroid, GrApple } from "react-icons/gr";
import { TiSocialTwitter, TiSocialFacebook, TiSocialGooglePlus, TiSocialLinkedin, TiSocialSkype, TiSocialYoutube } from "react-icons/ti";
import { TbSend } from "react-icons/tb";
import FooterSecTop from "./FooterSecTop";
import CopyRight from "./CopyRight";
import "./footer.css"
const FooterTop = () => {
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
        <FooterSecTop title="MY ACCOUNT" dis="Loram ipsum" />
        <FooterSecTop title="WE ARE APMEX" dis="Loram ipsum" />
        <FooterSecTop title="My ACCOUNT" dis="Loram ipsum" />
        <FooterSecTop title="WE ARE APMEX" dis="Loram ipsum" />
        <FooterSecTop title="My ACCOUNT" dis="Loram ipsum" />
      </div>
            </div>
        </div>
 
      <div className="footer-third">
        <div className="footer-third-wrap">
        <div className="logo">ToolM5</div>
        <div className="text_input">
          <p>Loram ipsum,Loram ipsum,Loram ipsum,Loram ipsum</p>
          <div class="input-wrap">
            <input type="text" />
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
