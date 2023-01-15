import Menu from './pages/Menu';
import Session from './pages/Session';
import Details from './pages/Details';
import Trainer from './pages/Trainer';
import TrainerDetails from './pages/TrainerDetails';
import Membership from './pages/Membership';
import MemberDetails from './pages/MemberDetails';
import Team from './pages/Team';
import Checkout from './pages/Checkout';
import OwnerDetails from './pages/OwnerDetails';
import GuideDetails from './pages/GuideDetails';
import Register from './pages/Register';
import Login from './pages/Login';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Session" element={<Session />} />
        <Route path="Sessions/:sessionId" element={<Details />} />
        <Route path="/Trainer" element={<Trainer />} />
        <Route path="Trainers/:trainerId" element={<TrainerDetails />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="Members/:memberId" element={<MemberDetails />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Owners/:ownerId" element={<OwnerDetails />} />
        <Route path="/Guides/:guideId" element={<GuideDetails />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
