import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
      navigate("/", { replace: true });
    };

  return (
    <>
      <div className="bg-warning text-white">
        <ul className="nav mynav">
          <li className="nav">
            <Link to={"/login"}>
              <button className="NavButton btn btn-primary">Home</button>
            </Link>
          </li>
          <li className="nav">
            <Link to={"/animaciones"}>Páginas animaciones</Link>
          </li>
         <Link to={"#"}> <li className='nav'>2 ruta</li> </Link>
         <Link to={"#"}> <li className='nav'>3 ruta</li> </Link>
          <li onClick={handleLogout}>
            <Link to={"#"}>Log out</Link>
          </li>
          <li className="nav form-inline ml-4 liForm">
            <form className="  form-inline my-2 my-lg-0">
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 ml-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar




      



