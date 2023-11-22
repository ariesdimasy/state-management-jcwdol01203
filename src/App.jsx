import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //localStorage.setItem("count",0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    localStorage.setItem("token","8th4iogqj4at9uy[uty[kdfsngv;")
    localStorage.setItem("count", count)
    localStorage.setItem("people",JSON.stringify([{ name:"dimas", 'age':27},{ name:"rizky", age:25}]))

    sessionStorage.setItem("name","dimas")
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p> localStorage value count = {localStorage.getItem("count")}</p>
      </div>
      <div className='card'>
        <ul>
        {JSON.parse(localStorage.getItem('people'))?.map((item, key) => {
          return <li key={key}>{item.name} - {item.age} year </li>
        }) || ''}
        </ul>
      </div>
      <div className='card'>
        {sessionStorage.getItem("name")}
      </div>
      <button onClick={() => localStorage.removeItem('count')}> Delete localStorage count </button>
      <button onClick={() => localStorage.clear()}> Clear localStorage </button>
       <button onClick={() => sessionStorage.removeItem('name')}> Delete sessionStorage count </button>
      <button onClick={() => sessionStorage.clear()}> Clear sessionStorage </button>
    </>
  )
}

export default App
