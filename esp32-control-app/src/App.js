import React from 'react';
import axios from 'axios';

function App() {
  const sendCommand = (cmd) => {
    axios.get(`http://192.168.0.102/${cmd}`)
      .then(response => console.log(response.data))
      .catch(error => console.error("Error:", error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => sendCommand('LED=ON')}>Turn LED On</button>
        <button onClick={() => sendCommand('LED=OFF')}>Turn LED Off</button>
      </header>
    </div>
  );
}

export default App;
