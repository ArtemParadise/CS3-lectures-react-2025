import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home';
import { RecepiesPage } from './pages/recipies';
import { Navigation } from './components/navigation';
import './App.css'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recepies" element={<RecepiesPage />} />
      </Routes>
    </>
  )
}

export default App
