import React from 'react'

export default function Files(props) {
    let mystyle = {
        width:'18rem',
        margin:'6px',
        padding:'2px',
        color: props.mode==='light'?'black':'white',
        backgroundColor: props.mode==='light'?'white':'#010017',
        border: `2px solid ${props.mode==='light'?'black':'white'}`
    }
  return (
    <div>
<h1 className='textcenter'><br /> Files </h1>
<div className='margin-div'>

<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">Syllabus</h5>


<br /><br /> <br />

<a href="https://drive.google.com/file/d/1AbnbOIwTgzB2jfftBcF_6ugzhNn41uN1/view?usp=sharing" className={`card-link ancor-${props.mode}`}>View Syllabus</a>

</div>
</div>


<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">Python Cheat Sheet</h5>
<br /><br /><br />
<a href="https://drive.google.com/file/d/1G_VIGSa4WJOIXT9Dj9GMvbqcToMU3swh/view?usp=sharing" className={`card-link ancor-${props.mode}`}>View Python PDF</a>
{/* <button onClick={showpdf()}>View Pdf</button> */}
</div>
</div>


<div className="card" style={mystyle}>
  <div className="card-body">
    <h5 className="card-title">Question Papers</h5>
    <br /><br /><br />
    <a href="/Ques" className={`card-link ancor-${props.mode}`}>View Question Papers</a>
  </div>
</div>


</div>

    </div>
  )
}
