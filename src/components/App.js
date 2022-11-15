import Header from "./Head";
import FooterTop from "./footer/FooterTop";
import AboutUs from "./AboutUs";
import Work from "./Work";
import ImageTitleDate from "./ImageTitleDate";
import Banner from "./Banner";
import "./App.css";


const App = () => {
  const feature = [
    {
      source : "img/f1.png",
      title : "Unique Design",
      date : "July 13 2025"
    },
    {
      source : "img/f2.png",
      title : "Quality Materials",
      date : "July 15 2025"
    },
    {
      source:"img/f3.png",
      title:"High Print Quality",
      date:"July 23 2025"
    },
    {
      source:"img/f4.png",
      title:"Good reviews",
      date:"July 27 2025"
    }
  ]
  return (
    <>
    <div className="container">
      <Header></Header>
      <Banner
        text_1="Creat Your"
        text_2="T-Shirt Designs"
        link="View how it works"
        discription="Loram ipsum dolor sit amit, Loram ipsum dolor sit amit"
      />
      <h2 className="sfeatures_heading">Our Features</h2>
      <div className="our_features">
        {feature.map((item)=>
        <ImageTitleDate source={item.source} title={item.title} date={item.date}></ImageTitleDate>)}
      </div>
      <Work />
      <AboutUs />
    </div>
      <FooterTop />
      </>
  );
};
export default App;
