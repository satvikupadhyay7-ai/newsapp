const NewsItem=()=>{
    return(<div>
<div className="card" style={{maxwidth:"345px"}}>
  <img src={src} className="card-img-top" alt="...">
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desciption}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>)
}
export default NewsItem