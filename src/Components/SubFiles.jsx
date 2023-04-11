import React from 'react'

export default function SubFiles(props) {
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
       <div>
<h1 className='textcenter'><br />{props.sub} </h1>
<br /><br />
<div className='margin-div'>

<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">Class Notes</h5>


<br /><br /> <br />

{/* <a href="https://drive.google.com/drive/folders/1ScRqb7S1LaVnblyV_tjNGJkwNyfzgctW" className={`card-link ancor-${props.mode}`}>View Notes</a> */}
<a href={`${props.u1}`} className={`card-link ancor-${props.mode}`}>View Notes</a>

</div>
</div>


<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">Assignments</h5>
<br /><br /><br />
{/* <a href="https://drive.google.com/drive/folders/1Se6L6r54sw-GurHXQeTDzdzNJD-n5-cx" className={`card-link ancor-${props.mode}`}>View Assignments</a> */}
<a href={`${props.u2}`} className={`card-link ancor-${props.mode}`}>View Assignments</a>
</div>
</div>
<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">Imp Questions</h5>
<br /><br /><br />
{/* <a href="https://drive.google.com/drive/folders/1SX0zvSidJ5IjaJHaE1_0hjSCfl6L4Ycm" className={`card-link ancor-${props.mode}`}>View Questions</a> */}
<a href={`${props.u2}`} className={`card-link ancor-${props.mode}`}>View Questions</a>

</div>
</div>





</div>

    </div>
   </>
  )
}
