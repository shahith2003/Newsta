import logo from '../assets/logo.png'

function Navbar({ setCategory, setCountry, setSearchQuery }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand mt-2" href="#">
          <img src={logo} alt="Bootstrap" width="120" height="60" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navi-cat" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <div className="nav-link" onClick={() => setCategory("technology")}>General</div>
            </li>
            <li className="nav-item dropdown my-1 mx-1">
              <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </button>
              <div className="dropdown-menu p-2 custdrop" style={{ minWidth: "500px" }}>
                <div className="row row-cols-2 g-2">
                  <div className="col">
                    <button onClick={() => setCategory("world")} className="btn btn-outline-danger w-100">
                      🌍 World
                    </button>
                  </div>
                  <div className="col">
                    <button onClick={() => setCategory("nation")} className="btn btn-outline-danger w-100">
                      🏛️ Nation
                    </button>
                  </div>
                  <div className="col">
                    <button onClick={() => setCategory("business")} className="btn btn-outline-danger w-100">
                      💼 Business
                    </button>
                  </div>
                  <div className="col">
                    <button onClick={() => setCategory("technology")} className="btn btn-outline-danger w-100">
                      💻 Tech
                    </button>
                  </div>
                  <div className="col">
                    <button onClick={() => setCategory("entertainment")} className="btn btn-outline-danger w-100">
                      🎬 Entertainment
                    </button>
                  </div>
                  <div className="col">
                    <button onClick={() => setCategory("sports")} className="btn btn-outline-danger w-100">
                      ⚽ Sports
                    </button>
                  </div>
                  <div className="col">
                    <button onClick={() => setCategory("science")} className="btn btn-outline-danger w-100">
                      🔬 Science
                    </button>
                  </div>
                  <div className="col">
                    <button onClick={() => setCategory("health")} className="btn btn-outline-danger w-100">🏥 Health</button>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown my-1 mx-1">
              <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </button>
              <div className="dropdown-menu p-2 custdrop" style={{ minWidth: "500px"}}>
                <div className="row row-cols-3 g-2">
                  <div className="col"><button onClick={() => setCountry("au")} className="btn btn-outline-primary w-100">Australia</button></div>
                  <div className="col"><button onClick={() => setCountry("ca")} className="btn btn-outline-primary w-100">Canada</button></div>
                  <div className="col"><button onClick={() => setCountry("in")} className="btn btn-outline-primary w-100">India</button></div>
                  <div className="col"><button onClick={() => setCountry("pk")} className="btn btn-outline-primary w-100">Pakistan</button></div>
                  <div className="col"><button onClick={() => setCountry("ph")} className="btn btn-outline-primary w-100">Philippines</button></div>
                  <div className="col"><button onClick={() => setCountry("sg")} className="btn btn-outline-primary w-100">Singapore</button></div>
                  <div className="col"><button onClick={() => setCountry("gb")} className="btn btn-outline-primary w-100">UK</button></div>
                  <div className="col"><button onClick={() => setCountry("us")} className="btn btn-outline-primary w-100">USA</button></div>
                  {/* <div className="col"><button onClick={() => setCountry("ch")} className="btn btn-outline-primary w-100">Switzerland</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("tw")} className="btn btn-outline-primary w-100">Taiwan</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("ua")} className="btn btn-outline-primary w-100">Ukraine</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("br")} className="btn btn-outline-primary w-100">Brazil</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("cn")} className="btn btn-outline-primary w-100">China</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("eg")} className="btn btn-outline-primary w-100">Egypt</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("fr")} className="btn btn-outline-primary w-100">France</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("de")} className="btn btn-outline-primary w-100">Germany</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("gr")} className="btn btn-outline-primary w-100">Greece</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("hk")} className="btn btn-outline-primary w-100">Hong Kong</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("ie")} className="btn btn-outline-primary w-100">Ireland</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("it")} className="btn btn-outline-primary w-100">Italy</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("jp")} className="btn btn-outline-primary w-100">Japan</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("nl")} className="btn btn-outline-primary w-100">Netherlands</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("no")} className="btn btn-outline-primary w-100">Norway</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("pe")} className="btn btn-outline-primary w-100">Peru</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("pt")} className="btn btn-outline-primary w-100">Portugal</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("ro")} className="btn btn-outline-primary w-100">Romania</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("ru")} className="btn btn-outline-primary w-100">Russia</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("es")} className="btn btn-outline-primary w-100">Spain</button></div> */}
                  {/* <div className="col"><button onClick={() => setCountry("se")} className="btn btn-outline-primary w-100">Sweden</button></div>  */}
                </div>
              </div>

            </li>
          </ul>
          <form className="d-flex" onSubmit={(e)=>{
            e.preventDefault();
            const query=e.target.search.value.trim();
            if(query) setSearchQuery(query)
            }}
             role="search">
            <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar