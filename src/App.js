import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header';
import Rockets from './components/rockets/rockets';
import Missions from './components/missions/missions';
import Profile from './components/profile/profile';


const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Rockets /> } />
        <Route path="/missions" element={ <Missions /> } />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App;
