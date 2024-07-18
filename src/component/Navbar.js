import React, {useState, useEffect} from "react";
import { Link, useLocation ,useNavigate, useHistory} from "react-router-dom";

const Navbar=()=>{
  const location=useLocation();
  // const history = useHistory();
  const navigate = useNavigate();

  // console.log(history,'history')
  console.log(navigate,'navigate')
  const [activeclass, setActiveClass]=useState(location.pathname)

  useEffect(() => {
    setActiveClass(location.pathname);
  }, [location]);

    return(<>
    
    {/* header section strats */}
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <Link className="navbar-brand" to="/">
            <span className="text-black">
              Feane
            </span>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mx-auto filters_menu">
              <li className="nav-item active">
                <Link className="nav-link"
                // className={`${activeclass==="/" ? "active":null}`}
                to="/">Home
                </Link>
              </li>
              <li className="nav-item">
                <Link  className="nav-link"
                // className={`${activeclass==="/menu" ? "active":null}`} 
                to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"
                // className={`${activeclass==="/about" ? "active":null}`} 
                to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"
                // className={`${activeclass==="/booktable" ? "active":null}`} 
                to="/booktable">Book Table</Link>
              </li>
            </ul>

            <div className="user_option">
              <Link to="/404" className="user_link">
              <i className="bi bi-person"></i>
              <svg xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                fill="currentColor" 
                className="bi bi-person color text-black" 
                viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
               </svg>
              </Link>
              </div>

              <div className="cart_option">
              <Link className="cart_link" to="/404">
              <i className="bi bi-cart"></i>
              <svg xmlns="http://www.w3.org/2000/svg"
              width="20" 
              height="20" 
              fill="currentColor" 
              className="bi bi-cart text-black" 
              viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
              </Link>
              </div>

              <div>
              <form className="form-inline">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
              <Link to="/404" className="order_online text-black">
                Order Online
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    
    
    </>)
}

export default Navbar;