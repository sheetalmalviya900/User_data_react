import { useState } from 'react';
import './App.css';
function Todolist() {
  const [name, setname] = useState("");
  const [list, setlist] = useState([]);
  function deleteData(index) {
    var Newarr = [...list]
    Newarr.splice(index, 1)
    setlist(Newarr)
  }
  return (
    <div id="Maindiv">
      <input type="text" placeholder='Enter the work' value={name} onChange={(e) => {
        setname(e.target.value)
      }} />
      <button id='submit' onClick={() => {
        name.trim()?setlist([...list, name]):alert("Enter a string");
        setname("")
      }}>Submit</button>
      {
        list.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item}</h1>

              <button id='delete' onClick={() => {
                deleteData(index)
              }}>Delete</button>

              <button id='update' onClick={() => {
                let newarr = [...list]
                let value = prompt("Enter the work")
                if(value.trim()){
                  newarr[index] = value
                  setlist(newarr)
                }
              }}>Update</button>

              <button onClick={() => {
                let newarr = [...list]
                newarr[index] = <del>{newarr[index]}</del>
                setlist(newarr)
              }}>Complete</button>
            </div>
          )
        })}
    </div>
  )
}
export default Todolist;



