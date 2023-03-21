import { useState } from 'react'
import HeroPage from './components/HeroPage';
import NavBar from './components/NavBar';
import CardsGroup from './components/CardsGroup';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar />
   <HeroPage />
   <CardsGroup />
   </>
  )
}

export default App
