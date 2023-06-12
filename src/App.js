import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import * as math from 'mathjs';


function App() {
    
  const [text, setText] = useState('')
  const [result, setResult] = useState('')


  const addText = (val) => {
    setText((text) => [...text, val])
  }
  

  const calculateText = () => {
     setResult(math.evaluate(text.join("")))
  }


   const clearText = () => {
    setText("")
    setResult("")
   }
  return (
    <div className="App">
       <div className='container'>
        <Input text={text} result={result} />
         <div className='btn-row'>
           <Button symbol={"AC"} handleClick={clearText} color={"red"}/>
           <Button symbol={"+/-"} handleClick={addText}/>
           <Button symbol={"%"}  handleClick={addText}/>
           <Button symbol={"/"} handleClick={addText} color={"#f2a33c"}/>
         </div>
         <div className='btn-row'>
           <Button symbol={7} handleClick={addText}/>
           <Button symbol={8} handleClick={addText}/>
           <Button symbol={"9"} handleClick={addText}/>
           <Button symbol={"*"} handleClick={addText} color={"#f2a33c"}/>
         </div>
         <div className='btn-row'>
           <Button symbol={"4"} handleClick={addText}/>
           <Button symbol={"5"} handleClick={addText}/>
           <Button symbol={"6"} handleClick={addText}/>
           <Button symbol={"-"} handleClick={addText} color={"#f2a33c"}/>
         </div>
         <div className='btn-row'>
           <Button symbol={"1"} handleClick={addText}/>
           <Button symbol={"2"} handleClick={addText}/>
           <Button symbol={"3"} handleClick={addText}/>
           <Button symbol={"+"} handleClick={addText} color={"#f2a33c"}/>
         </div>
         <div className='btn-row'>
           <Button symbol={"0"} handleClick={addText} size={"2rem"}/>
           <Button symbol={"."} handleClick={addText}/>
           <Button symbol={"="} handleClick={calculateText}/>
         </div>
       </div>
    </div>
  );
}

export default App;
