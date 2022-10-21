import "./ImageTitleDate.css"
const ImageTitleDate = (props) => {
  return (
    <div className="main-wraper">
      <div className="image-com">
      <img src={props.source} />
      </div>
      <div className="text-wrap">
        <div class="title">{props.title}</div>
        <div class="date">{props.date}</div>
      </div>
    </div>
  );
};
export default ImageTitleDate;
