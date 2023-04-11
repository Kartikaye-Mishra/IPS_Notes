import React from 'react'
import { Link } from 'react-router-dom'
export default function Main(props) {
    
    let mystyle = {
        width:'18rem',
        margin:'6px',
        padding:'2px',
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'#010017',
        border: `2px solid ${props.mode==='light'?'black':'white'}`
    }
   
  return (
    <>
    <div className="box">
        <h1 className='textcenter'><strong>
           <strong>
             IPS ACADEMY NOTES
            </strong>
            <br /><br />
            </strong></h1>
    <div className='margin-div' >

        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">CSE Notes</h5>
    <h6 className="card-subtitle mb-2 ">SEM-1</h6>
    <p className="card-text">Coming Soon!<br />Notes of this sem will be uploaded shortly.</p>
    <a href="#" className={`card-link ancor-${props.mode}`}>Sem1 Notes</a>
    {/* <a href="#" className={`card-link ancor-${props.mode}`}>Another link</a> */}
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">CSE Notes</h5>
    <h6 className="card-subtitle mb-2 ">SEM-2</h6>
    <p className="card-text">Coming Soon!<br />Notes of this sem will be uploaded shortly.</p>
    <a href="#" className={`card-link ancor-${props.mode}`}>Sem2 Notes</a>
    {/* <a href="#" className={`card-link ancor-${props.mode}`}>Another link</a> */}
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">CSE Notes</h5>
    <h6 className="card-subtitle mb-2 ">SEM-3</h6>
    <p className="card-text">NMT,Digital System,Data Structure & Algorithm,Programming Practices(C++),COA,POM</p>
    <a href="https://drive.google.com/drive/folders/16hWRDHKdxfSfJ41OHtSryiAzY9VZ-2E1" className={`card-link ancor-${props.mode}`}>Sem3 Notes</a>
    {/* <a href="#" className={`card-link ancor-${props.mode}`}>Another link</a> */}
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">CSE Notes</h5>
    <h6 className="card-subtitle mb-2 ">SEM-4</h6>
    <p className="card-text">
        {/* Coming Soon!<br />Notes of this sem will be uploaded shortly. */}
        Data Communication,Discrete Structure,Analysis and Design of Algorithms,SS&IC.
        </p>
    <Link to="./sem4" className={`card-link ancor-${props.mode}`}>Sem4 Notes</Link>
    {/* <a href="#" className={`card-link ancor-${props.mode}`}>Another link</a> */}
  </div>
</div>

 

    </div>
    <div className='margin-div' >

        <div className="card " style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">CSE Notes</h5>
    <h6 className="card-subtitle mb-2 ">SEM-5</h6>
    <p className="card-text">Coming Soon!<br />Notes of this sem will be uploaded shortly.</p>
    <a href="#" className={`card-link ancor-${props.mode}`}>Sem5 Notes</a>
    {/* <a href="#" className={`card-link ancor-${props.mode}`}>Another link</a> */}
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">CSE Notes</h5>
    <h6 className="card-subtitle mb-2 ">SEM-6</h6>
    <p className="card-text">Coming Soon!<br />Notes of this sem will be uploaded shortly.</p>
    <a href="#" className={`card-link ancor-${props.mode}`}>Sem6 Notes</a>
    {/* <a href="#" className={`card-link ancor-${props.mode}`}>Another link</a> */}
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">CSE Notes</h5>
    <h6 className="card-subtitle mb-2 ">SEM-7</h6>
    <p className="card-text">Coming Soon!<br />Notes of this sem will be uploaded shortly.</p>
    <a href="#" className={`card-link ancor-${props.mode}`}>Sem7 Notes</a>
    {/* <a href="#" className={`card-link ancor-${props.mode}`}>Another link</a> */}
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">CSE Notes</h5>
    <h6 className="card-subtitle mb-2 ">SEM-8</h6>
    <p className="card-text">Coming Soon!<br />Notes of this sem will be uploaded shortly.</p>
    <a href="#" className={`card-link ancor-${props.mode}`}>Sem8 Notes</a>
    {/* <a href="#" className={`card-link ancor-${props.mode}`}>Another link</a> */}
  </div>
</div>


</div>
    </div>
    </>
  )
}
