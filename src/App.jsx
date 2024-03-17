import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Sidebar from './components/Sidebar'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
     <div className='grid-container'>
     <Header OpenSidebar={OpenSidebar}/>
     <Home/>
     <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
     </div>
  )
}

export default App
