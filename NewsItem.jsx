import image from '../assets/dolla.jpeg'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div>
      <div className="card bg-dark text-lieght mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
        
        <img src={src?src:image} style={{height:20px width :30px}} className="card-img-top" alt="news" />

        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>

          <p className="card-text">
            {description ? description.slice(0,90):"hi"}
          </p>

          <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>

      </div>
    </div>
  )
}

export default NewsItem
