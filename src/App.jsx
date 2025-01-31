import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Bag from './components/Bag/Bag'
import PunchBtn from './components/PunchBtn/PunchBtn'

function App() {
  const [pv, setPv] = useState(100)

  return (
    <div className='App'>
    <ProgressBar pv={pv}/>
    <Bag pv={pv}/>
    <PunchBtn pv={pv} setPv={setPv}/>
    </div>
  )
}

export default App
