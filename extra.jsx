import { useState } from "react"
export default function App(){
  const [name,setName] = useState('')
  const [items,setItems] = useState([])
  return(
    <>
    <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
    <button onClick={()=>{
      setItems([...items,{name:name}])
    }}>ADD</button>
    <ul>{items.map(i =>(
      <li>{i.name} <button onClick={()=>{
        setItems(items.filter(a =>
          i !== a
          ))
      }}>DEL</button></li>
    ))}</ul>
    </>
  )
}