import React from 'react';
import Home from 'components/Home';
import { GlobalProvider } from 'contexts/GlobalContext';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Home />
    </GlobalProvider>
  );
};

export default App;
