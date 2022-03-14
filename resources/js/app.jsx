import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/home/Home';
import About from './page/about/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="app">

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </BrowserRouter>

    // </div>
  )
}

export default App

ReactDOM.render(
  <App />,
  document.getElementById('root')
);