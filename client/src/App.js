import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Overview from './shoppingListOverview/shoppingListOverview';
import Detail from './shoppingListOverview/detail/detail';
import UserProvider from './users/userProvider';
import { useState } from 'react';

function App() {
  const [selectedList, setSelectedList] = useState(null)

  return (
    <UserProvider>
      <Overview setSelectedList={setSelectedList} />
      <Detail selectedList={selectedList}/> 
    </UserProvider>
  );
}

export default App;
