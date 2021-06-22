import React from 'react';
import Input from './components/input/Input';
import './App.css'
import Title from './components/title/Title';
import Button from './components/button/Button';


function App() {

  
  function SomaInput(){
    var s1 = document.getElementById("input1") as HTMLInputElement
    var s2 = document.getElementById("input2") as HTMLInputElement
    var resu = parseInt(s1.value) + parseInt(s2.value);
    var resultado = resu.toString()
    var finalresu =  document.getElementById("idp") as HTMLParagraphElement
    finalresu.innerHTML = resultado
  }

  return (
    <div className="App">
        
      <div className="container-comps">
         
      <Title text={process.env.REACT_APP_TITLE_ENV}/>

      <div className="input-div">
      <Input id="input1"/>
      <Input id="input2"/>
      </div>
    
      <Button click={SomaInput}/>
      <p id="idp"></p>
      </div>
    </div>
  );
}

export default App;
