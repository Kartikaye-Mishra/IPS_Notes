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
        <h1 className='textcenter'><br /> {props.subject} <br /><br /></h1>
<div className='margin-div'>

        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Class Notes</h5>
    {/* <h6 className="card-subtitle mb-2 "> Notes</h6> */}
    {/* <p className="card-text">Click Here for notes</p> */}

    <br /><br /> <br />
   
    <a href="https://drive.google.com/drive/folders/1SSgTUgX4z7o4QBUir3VGdlrwW_iUxZYF" className={`card-link ancor-${props.mode}`}>Notes</a>
    {/* <a href="#" className="card-link">Another link</a> */}
  </div>
</div>


        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Assignments</h5>
    <br /><br /><br />
    <a href="#" className={`card-link ancor-${props.mode}`}>View Assignments</a>
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Question Papers</h5>
    <br /><br /><br />
    <a href="#" className={`card-link ancor-${props.mode}`}>View Question Papers</a>
  </div>
</div>
        <div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Imp Questions</h5>
    <br /><br /><br />
    <a href="#" className={`card-link ancor-${props.mode}`}>Questions</a>
  </div>
</div>



{/* Files Section */}




</div>

    </>
  )
}
