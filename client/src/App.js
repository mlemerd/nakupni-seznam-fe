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
      <div className='row'>
        <div className='col-8'>
          <Overview setSelectedList={setSelectedList} />
        </div>
        <div className='position-absolute start-50'>
          <Detail selectedList={selectedList}/> 
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
