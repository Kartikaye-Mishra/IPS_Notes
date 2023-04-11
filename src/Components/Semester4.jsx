import React from 'react'

export default function Semester4(props) {
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
        <h1 className='textcenter'><br /> <strong>{props.subject}</strong>  <br /><br /></h1>
<div className='margin-div'>

        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Analysis & Design of Algorithm</h5>
    {/* <h6 className="card-subtitle mb-2 "> Notes</h6> */}
    {/* <p className="card-text">Click Here for notes</p> */}

    <br /><br /> <br />
   
    <a href="/ADA" className={`card-link ancor-${props.mode}`}>View Folder</a>
    {/* <a href="#" className="card-link">Another link</a> */}
  </div>
</div>


        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Object Oriented Programming Methodology</h5>
    <br /><br />
    <a href="/OOPM" className={`card-link ancor-${props.mode}`}>View Folder</a>
  </div>
</div>
      
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Discrete Structure</h5>
    <br /><br /><br /><br />
    <a href="/DS" className={`card-link ancor-${props.mode}`}>View Folder</a>
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Soft Skills & Interpersonal Communication</h5>
    <br /><br /><br />
    <a href="/SSIC" className={`card-link ancor-${props.mode}`}>View Folder</a>
  </div>
</div>

<div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Data Communication</h5>
    <br /><br /><br /><br />
    <a href="/DC" className={`card-link ancor-${props.mode}`}>View Folder</a>
  </div>
</div>





</div>

    </>
  )
}
