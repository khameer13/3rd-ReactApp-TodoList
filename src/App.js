import { createElement } from 'react';
import './App.css';
import MyComponent from './todoElement';


function addnote() {
  const inputhead = document.getElementById("inputhead").value;
  const inputbody = document.getElementById("inputbody").value;
  if(inputhead!=""){
  
    let newcomp = document.createElement("div");
    newcomp.innerHTML =
      `<h2>${inputhead}</h2>
    <p>${inputbody}</p>`;
    newcomp.classList.add('listelement');
    console.log("khameer");
    // newcomp.style.className='listelement';    incorrect way to add class
    newcomp.classList.add('listelement');   //correct way to add class
    const noteContainer=document.getElementById("noteContainer");
    noteContainer.appendChild(newcomp);
    document.getElementById("inputhead").value = "";
    document.getElementById("inputbody").value=""

  }

  else{
    alert("please provide a file name")
  }



}

function App() {
  return (
    <>
      <h1>To-Do list</h1>
      <div className='box'>
        <div id="noteContainer" className='todobox' >
       

        </div>
        <div className='inputbox'>
          <input id="inputhead" type="text" placeholder="name" />
          <textarea id="inputbody" type="text" placeholder="Enter your text" />
          <button type="button" onClick={addnote} >  Add Note </button>
        </div>

      </div>
    </>
  );
}

export default App;
