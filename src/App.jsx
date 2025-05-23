import { useState } from "react";
import './App.css'

let pessoas=[]
function App() {
  const [ nome, setNome ] = useState("")
  const [ idade, setIdade ] = useState("")

  const handleClick = () => {
    pessoas.push({id:pessoaslength,nome, idade})
    console.log(pessoas)
    setNome("")
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleIdade = (e) => {
    setIdade(e.target.value)
  }
  return(
    <>
      <div className="card">
        <input type="text"
        placeholder="digite aqui"
        onChange={handleName}
        value={nome}/>
          <button onClick={handleClick}>Clique aqui</button>
          {pessoas.map(e=>(
            <div key={e.name}>
            <p>Nome: {e.name}</p>
            <p>Idade: {e.idade}</p>
            </div>
          ))}
      </div>    
    </>
  )
}

export default App