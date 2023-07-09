import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContinentsPage from './pages/ContinentsPage';
import CountriesPage from './pages/CountriesPage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetails from './pages/DestinationDetails';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ContinentsPage />} />
        <Route path='/continent/:name' element={<CountriesPage />} />
        <Route path='/country/:name' element={<DestinationsPage />} />
        <Route path='/details/:name' element={<DestinationDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
