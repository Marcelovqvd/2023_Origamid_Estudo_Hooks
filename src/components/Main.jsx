import { useState } from 'react';
import './Main.css'

export function Main() {
  const [productName, setProductName] = useState('')
  const [productValue, setProductValue] = useState('')

  async function handleClick({target}) {   
    setProductName(target.innerText)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${productName}`)
    const jsonResponse = await response.json()
    setProductValue(jsonResponse.preco)
    return null
  }

  return (
     <div className='main'>
      <header>
        <h1>Preferência: <strong>{productName}</strong></h1>
      </header>
      <div className='containerButtons'>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
      </div>
      <p>{productName}: <strong>R$ {productValue}</strong></p>      
    </div>
  )
}