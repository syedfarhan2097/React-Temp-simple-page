import { BiCopyright } from "react-icons/bi";
import CoptrightImages from "./CopyrightImages";
const CopyRight = () => {
  return (
    <div className="copyright">
      <div className="container">
        <div className="copyright-wrap">
        <div>
        <BiCopyright />
        <span>2022 ToolM5 . All Rights Reserved</span>
        <p>Privacy Policy | Market Loss Policy | User Agreement</p>
        </div>
        <div className="copyright-imgs">
        <CoptrightImages source="img/75x22-20th-Anniversary.webp" />
        <CoptrightImages source="img/footer-bbb.webp" />
        <CoptrightImages source="img/shopper-approved.webp" />
        <CoptrightImages source="img/footer-mcafee-v2.webp" />
        </div>
        </div>
      </div>

    </div>
  );
};
export default CopyRight;
