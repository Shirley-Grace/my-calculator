import React,{useState}from 'react'

function Input() {
  const [number,setNumber] = useState('')

  const handleClick= (e) =>{
    setNumber(number.concat(e.target.value))
  }
  const handleClear = ()=>{
    setNumber(number.slice(0, -1))
  }
  const handleAnswer = () =>{
    try{
      setNumber(eval(number).toString())
    }catch(error){
      setNumber()
    }

  }

  return (
    <div>

      <input class="input" id="input " placeholder='0' value={number} />

      <div class="buttons">


        <button value='1' onClick={handleClick}>1</button>
        <button value='2' onClick={handleClick}>2</button>
        <button value='3' onClick={handleClick}>3</button>
        <button value='+' onClick={handleClick}>+</button>
        <button value='4' onClick={handleClick}>4</button>
        <button value='5' onClick={handleClick}>5</button>
        <button value='6' onClick={handleClick}>6</button>
        <button value='-' onClick={handleClick}>-</button>
        <button value='7' onClick={handleClick}>7</button>
        <button value='8' onClick={handleClick}>8</button>
        <button value='9' onClick={handleClick}>9</button>
        <button value='×' onClick={handleClick}>×</button>
        <button  onClick={handleClear}>Del</button>
        <button value='0' onClick={handleClick}>0</button>
        <button  onClick={handleAnswer}>=</button>
        <button value='÷' onClick={handleClick}>÷</button>

      </div>


    </div>
  )
}

export default Input