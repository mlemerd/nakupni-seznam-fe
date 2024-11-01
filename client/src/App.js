import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
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
