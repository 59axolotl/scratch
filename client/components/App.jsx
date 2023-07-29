import React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/styles.scss';
import List from './List.jsx'

const App = () => {
  return (
    <div id="container">
      App
    </div>
  );
};
const root = createRoot(document.getElementById('root'));
root.render(<App />);

export default App