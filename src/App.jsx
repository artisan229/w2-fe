import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basic from './page/Basic';
import Watch from './page/Watch';
import Policy from './page/Policy';
import PlayerProvider from './provider/PlayerProvider';

function App() {
  return (
    <>
      <PlayerProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Basic />} />
            <Route path="/watch">
              <Route path=":id" element={<Watch />} />
            </Route>
            <Route path="/policy" element={<Policy />} />
          </Routes>
        </BrowserRouter>
      </PlayerProvider>
    </>
  );
}

export default App;
