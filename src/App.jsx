import { useState } from 'react'
import './App.css'

function App() {
  var nome = "Cleiton";

  const [name, setName] = useState("Valor inicial");
  const [sobrenome, setSobrenome] = useState(""); // Novo estado

  function mudarNome(event) {
    nome = event.target.value
    setName(event.target.value)
  }

  function mudarSobrenome(event) {
    setSobrenome(event.target.value)
  }

  return (
    <>
      <p>Informe seu nome</p>
      <input onChange={mudarNome} />

      <p>{nome}</p>
      <p>Agora via UseState : {name}</p>

      <p>Informe seu Sobrenome</p>
      <input onChange={mudarSobrenome} />

      <p>Sobrenome via UseState: {sobrenome}</p>
    </>
  )
}

export default App