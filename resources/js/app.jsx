import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/home/Home';


function App() {
  return (
    <div className="app">
      <Home />

    </div>
  )
}

export default App



ReactDOM.render(
  <App />,
  document.getElementById('root')
);