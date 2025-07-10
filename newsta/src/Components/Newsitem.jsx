
const Newsitem = ({ title, description, src, url }) => {
  return (
      <div className="card mb-3 d-inline-block my-3 mx-3 py-2 px-2" style={{ maxWidth: "345px" }}>
      <img src={src} style={{height:"200px",width:"325px"}} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}...</h5>
        <p className="card-text">{description.slice(0,90)}...</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default Newsitem