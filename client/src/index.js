// Import our custom CSS
import './styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';

const root = createRoot(document.getElementById('root'));
console.log(root);

root.render(<App />);
