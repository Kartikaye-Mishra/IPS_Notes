import React from 'react'

export default function SubQues(props) {
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
<h1 className='textcenter'><br />Question Papers</h1>
<div className='margin-div'>

<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">4th Sem Papers</h5>


<br /><br /> <br />

<a href="https://drive.google.com/file/d/1GZPAzPpKJ-haGCrf7WeHUmi8S68tdzVG/view?usp=sharing" className={`card-link ancor-${props.mode}`}>View pdf</a>

</div>
</div>


<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">4th Sem Papers-2</h5>
<br /><br /><br />
<a href="https://drive.google.com/file/d/1XpqX55Lw6ODfc2gwlCZVaSdqcVUY2wB4/view?usp=sharing" className={`card-link ancor-${props.mode}`}>View pdf</a>
</div>
</div>
<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">MST-1(2023)</h5>
<br /><br /><br />
<a href="https://drive.google.com/file/d/1R5sCIHXlS5-y9lcKYeJzBKGD_VgXaVlX/view?usp=sharing" className={`card-link ancor-${props.mode}`}>View pdf</a>

</div>
</div>
<div className="card" style={mystyle}>
<div className="card-body">
<h5 className="card-title">MST-2(2023)</h5>
<br /><br /><br />
<a href="https://drive.google.com/file/d/1YUxZVxbLWznRJlL5iNeZm6Zh0W1D-9Rk/view?usp=sharing" className={`card-link ancor-${props.mode}`}>View pdf</a>

</div>
</div>





</div>

    </div>
   </>
  )
}
