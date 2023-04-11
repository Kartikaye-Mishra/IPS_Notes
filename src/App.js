import React,{useState} from 'react'
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import { BrowserRouter as Mainroute, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Error from './Components/Error';
import Semester4 from './Components/Semester4';
import Files from './Components/Files';
import SubFiles from './Components/SubFiles';
import SubQues from './Components/SubQues';

function App() {

const sem4subjects = [
{
  sub:"Analysis and Design of Algorithm",
  /*Notes*/u1:"https://drive.google.com/drive/folders/1ScRqb7S1LaVnblyV_tjNGJkwNyfzgctW",
  /*Assignments*/u2:"https://drive.google.com/drive/folders/1Se6L6r54sw-GurHXQeTDzdzNJD-n5-cx",
  /*Questions*/u3:"https://drive.google.com/drive/folders/1SX0zvSidJ5IjaJHaE1_0hjSCfl6L4Ycm",
},
{
  sub:"Object Oriented Programming Methodology",
  u1:"https://drive.google.com/drive/folders/1SKoMUSGF5CXvUxzIdxDJOXBpm2P724qt",
  u2:"https://drive.google.com/drive/folders/1U4ouCdyQE0lnfxfAMHJ4NBS6UeHE674X",
  u3:"https://drive.google.com/drive/folders/1SDrRQG-StY69KKgZJXS-MUTzA5yOGT3i",
},
{
  sub:"Soft Skills and Interpersonal Communication",
  u1:"https://drive.google.com/drive/folders/1StivpQmsj44m9TcBf42NVa0vguzC1C8a",
  u2:"https://drive.google.com/drive/folders/1SpZ3G2rdRFd509BcQNrS2yU6gcLszkDu",
  u3:"https://drive.google.com/drive/folders/1SeTCR2ntVUrYUPkJppZIqDLHjVRigheB",
},
{
  sub:"Discrete Structure",
  u1:"https://drive.google.com/drive/folders/1Sj7yTWGLO3Twadr8ZvMnxZZz2IMpIqq6",
  u2:"https://drive.google.com/drive/folders/1TyCqPI2bVBqvBQ4RSSG_3FbXmTcuKsPV",
  u3:"https://drive.google.com/drive/folders/1SkEAAdCan3YmaaXJpevRFUuoct3vG3tM",
},
{
  sub:"Data Communication",
  u1:"https://drive.google.com/drive/folders/1T5GfctBoIdpvIkFNex9HE_v6z1RIslAX",
  u2:"https://drive.google.com/drive/folders/1T3L01Ge0Tuk2_j45X2h8hVxe-vaHU3uR",
  u3:"https://drive.google.com/drive/folders/1SwUqZHzcT-tuZJHIKn1dJlUxoXk1jAc0",
}

]











  const [mode,setmode] = useState("light");
  const toggle=()=>{
    if(mode==='light'){ 
      setmode('dark');
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#010017";
    }
    else{
      setmode('light');
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Mainroute>
    <Navbar mode={mode} toggle={toggle}/>
    <div className="my-50"></div>
    {/* <Main mode={mode}/>
    <About/> */}

    <Routes>

    <Route exact path='/'element = {<Main mode={mode}/>}/>
    {/* <Route exact path='/about'element = {<About />}/>
  */}
    <Route exact path='/sem4'element = {
      <div>

    <Semester4 subject = {"Subjects"} mode={mode} />
    <Files mode={mode}/>
      </div>
    }/>

    <Route exact path='/ADA'element = {<SubFiles  mode={mode} {...sem4subjects[0]}/>}/> 
    <Route exact path='/OOPM'element = {<SubFiles  mode={mode} {...sem4subjects[1]}/>}/> 
    <Route exact path='/SSIC'element = {<SubFiles  mode={mode} {...sem4subjects[2]}/>}/> 
    <Route exact path='/DS'element = {<SubFiles  mode={mode} {...sem4subjects[3]}/>}/> 
    <Route exact path='/DC'element = {<SubFiles  mode={mode} {...sem4subjects[4]}/>}/> 






    <Route exact path='/Ques'element = {<SubQues mode={mode} />}/>
    <Route exact path='/*' element={<Error/>}/>





    {/* REndering multiple components in same route. can use <Fragment> also in palce of <div> */}
    {/* <Route path='/' element = {
      <div>
        <Main mode={mode}/>
         <About />
       </div>
    } /> */}

  </Routes>
  
    </Mainroute>
    </>
  );
}

export default App;
