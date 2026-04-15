const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark fs-4">
              NewsBoard
            </span>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              </li>

              <li className="nav-item">
               <div className="nav-link" onClick={()=>setcategory("technology")}>Technology</div>
              </li>
              <li className="nav-item">
               <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
              </li>
<li className="nav-item">
               <div className="nav-link" onClick={()=>setCategory("health")>Health</div>
              </li>
<li className="nav-item">
               <div className="nav-link" onClick={()=>setCategory("sports")>Sports</div>
              </li>
<li className="nav-item">
               <div className="nav-link" onClick={()=>setCategory("entertainment")>Entertainment</div>
              </li>

            

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
