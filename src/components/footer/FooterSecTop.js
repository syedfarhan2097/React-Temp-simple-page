const FooterSecTop = ({title, dis,}) =>{

    return(

        <div className="footer-secn">
            <h2>{title}</h2>
            {dis.map((list)=><p>{list.name}</p>)}

        </div>
    );
} 
export default FooterSecTop;