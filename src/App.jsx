import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-amber-950'>
    <div className='border-2 border-black p-8 rounded-xl flex flex-col items-center gap-6 bg-amber-950'>
      <h1 className='text-5xl font-bold mb-3'>Countify React</h1>
      <div className='flex gap-5'>
        <button onClick={()=> setCounter(prev => Math.max(prev -1, 0))}
      className='p-4 bg-amber-400 rounded-xl text-4xl'
      >━</button>


      <input onChange={(e)=> setCounter(Number(e.target.value))}
      value={counter}
      className='border-b-2 text-center w-32 h-16 text-4xl'
      type="number"
      placeholder='Enter number' />


      <button onClick={()=> setCounter(prev => Math.min(prev + 1, 100))}
      className='p-4 bg-amber-400 rounded-xl text-4xl'
      >✚</button>

      </div>
      <div>
        <button onClick={()=> setCounter(0)}
        className='p-4 bg-amber-400 rounded-xl text-4xl'
        >🗘</button>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
