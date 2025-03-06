import './App.css';
import Homescreen from './Homescreen';
import NavBar from './NavBar';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Registerscreen from './Registerscreen';
import ReservedTable from './ReservedTable';
import Loginscreen from './Loginscreen';
import FrontScreen from './FrontScreen';
import Reservation from './Reservation';
import ProfileScreen from './ProfileScreen';
import Footer from './Footer';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="fg">
        <NavBar />
        <Routes>
          <Route path="/" element={<FrontScreen />} />
          <Route path="/home" element={<Homescreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/login" element={<Loginscreen setUser={setUser} />} />
          <Route path="/reserve" element={<Reservation />} />
          <Route path="/reserved-table" element={<ReservedTable />} />
          <Route path="/profile" element={<ProfileScreen user={user} setUser={setUser} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
