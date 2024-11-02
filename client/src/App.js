import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Overview from './shoppingListOverview/shoppingListOverview';
import Detail from './shoppingListOverview/detail/detail';
import UserProvider from './users/userProvider';

function App() {
  return (
    <UserProvider>
      <Overview />
      <Detail/>
    </UserProvider>
  );
}

export default App;
