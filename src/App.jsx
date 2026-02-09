import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MobileLayout from './layouts/MobileLayout';
import Intro from './pages/Intro';
import Onboarding from './pages/Onboarding';
import Menu from './pages/Menu';
import PT from './pages/PT';
import Profile from './pages/Profile';
import Membership from './pages/Membership';
import Cart from './pages/Cart';
import Confirm from './pages/Confirm';
import Place from './pages/Place';
import Price from './pages/Price';
import Gender from './pages/Gender';
import Age from './pages/Age';
import Height from './pages/Height';
import Weight from './pages/Weight';
import Map from './pages/Map';
import Address from './pages/Address';
import Favorite from './pages/Favorite';
import Setting from './pages/Setting';
import Report from './pages/Report';
import Thumbnail from './pages/Thumbnail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileLayout />}>
          <Route path="/" element={<Intro />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pt" element={<PT />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/place" element={<Place />} />
          <Route path="/price" element={<Price />} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/age" element={<Age />} />
          <Route path="/height" element={<Height />} />
          <Route path="/weight" element={<Weight />} />
          <Route path="/map" element={<Map />} />
          <Route path="/address" element={<Address />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/report" element={<Report />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
