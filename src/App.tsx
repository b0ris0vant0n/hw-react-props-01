import React from 'react';
import Stars from './Stars';

const App: React.FC = () => {
  return (
    <div className="App">
      <Stars count={3} />
    </div>
  );
}

export default App;
