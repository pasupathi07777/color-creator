import { useState } from 'react';
import './App.css';
import Form_validation from './components/Form_validation';
import Square_box from './components/Square_box';


function App() {


  let [color_name,setcolor_name]=useState("")
  let [hexcolor_name,sethexcolor_name]=useState('')
  console.log(hexcolor_name)
 
  let [names, setname]=useState(true)
  console.log(names)
  


  
  return (
    <div className="container">
      <Square_box  color_name={color_name} hexcolor_name={hexcolor_name} names={names} />
      <Form_validation color_name={color_name} setcolor_name={setcolor_name} sethexcolor_name={sethexcolor_name} names={names} setname={setname}/>
    </div>
    
  );
}

export default App;
