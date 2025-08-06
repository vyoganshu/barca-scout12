import Home from './Home.jsx'
import Compare from './Compare.jsx'
import ViewPlayers from './ViewPlayers.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import VotePage from './Votepage.jsx'

function App() {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/view-players" element={<ViewPlayers />} />
      <Route path="/vote" element={<VotePage />} />
    </Routes>
    </>
  )
}

export default App
