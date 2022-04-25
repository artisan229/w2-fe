import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basic from './page/Basic';
import Premium from './page/Premium';
import Watch from './page/Watch';
import Category from './page/Category';
import Upload from './page/Upload';
import MyPage from './page/MyPage';
import Support from './page/Support';
import Login from './page/Login';
import SignUp from './page/SignUp';
import AppStateProvider from './provider/AppStateProvider';

function App() {
  return (
    <>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Basic />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/watch">
              <Route path=":id" element={<Watch />}/>
            </Route>
            <Route path="/category" element={<Category />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </>
  );
}

export default App;
