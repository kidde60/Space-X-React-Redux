import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import RocketsPage from './components/rockets/rocketsPage';
import MissionCard from './components/missions/missionCard';
import Profile from './components/profile/profile';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from './redux/Rockets/rockets';
import { fetchMissions } from './redux/Mission/mission';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RocketsPage />} />
          <Route path="/missions" element={<MissionCard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>,
    </>
  );
};

export default App;
