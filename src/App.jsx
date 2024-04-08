import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import colorlist from './colors.jsx'
import Confetti from 'react-confetti'


         console.log(colorlist)

        let random =""
function App() {
  let [color, setColor] = useState()
  
  setColor=rand()

  function rand() {
    random= colorlist[(Math.floor(Math.random() * colorlist.length))];
   
}


color=rand()
console.log('color =' + random)

  return (

    

    <div className='app'>
    <section style={{backgroundColor: random}} className='colorbox'>
      </section>
      <div className='buttons'>

      <button  onClick={() => alert('WINNER!!!!')} >
        {random}</button>
        {rand()}
      <button>{random}</button>
      {rand()}
      <button>{random}</button>
      </div>
    </div>
  )
}

export default App
