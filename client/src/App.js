import './App.css';
import React from 'react';
import Overview from './shoppingListOverview/shoppingListOverview';
import UserProvider from './users/userProvider';

function App() {
  return (
    <UserProvider>
      <Overview />
    </UserProvider>
  );
}

export default App;
