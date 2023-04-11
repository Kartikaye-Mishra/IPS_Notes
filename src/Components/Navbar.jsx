import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   <>

    <nav className={`navbar bg-${props.mode} navbar-expand-lg `} data-bs-theme={`${props.mode}`}>
   

  <div className="container-fluid">
    <a className="navbar-brand" href="/"><strong>IPS Notes</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className={`nav-link active navancor-${props.mode} mx-2`} aria-current="page" to="/">Home</Link>
        </li>
       
        {/* <li className="nav-item">
          <Link className={`nav-link active navancor-${props.mode} mx-2`} aria-current="page" to="/about">About us</Link>
        </li> */}
        

      </ul>
    
     
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}` } htmlFor="flexSwitchCheckDefault">Dark Mode</label>
  
  </div>
      </div>
  </div>
</nav>
   </>
  )
}
