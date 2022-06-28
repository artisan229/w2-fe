import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Basic from './page/Basic';
import Info from './components/Info';
import Watch from './page/Watch';
import Policy from './page/Policy';
import Login from './page/Login';
import PlayerProvider from './provider/PlayerProvider';

function App() {
  return (
    <>
      <PlayerProvider>
        <Routes>
          <Route path="/" element={<Basic />}>
            <Route path=":id" element={<Info />} />
          </Route>
          <Route path="/watch">
            <Route path=":id" element={<Watch />} />
          </Route>
          <Route path="/policy" element={<Policy />} />
          <Route path="/welcome" element={<Login />} />
        </Routes>
      </PlayerProvider>
    </>
  );
}

export default App;
