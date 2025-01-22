
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { Home } from './components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <Home />
      <AppRoutes />
    </Router>
  );
};

export default App;
