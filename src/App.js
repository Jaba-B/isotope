import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import Home from './pages/Home'
import Inner from './pages/Inner'
import Feedbacks from './components/Feedbacks'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/inner" element = {<Inner />} />
      </Routes>
    </>
  );
}

export default App;
