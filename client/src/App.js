import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Overview from './shoppingListOverview/shoppingListOverview';
import UserProvider from './users/userProvider';
import { ThemeProvider } from './shoppingListOverview/themeprovider';
import { useState } from 'react';


function App() {
  const [selectedList, setSelectedList] = useState(null)

  return (
    <ThemeProvider>
      <UserProvider>
        <div className='row'>
          <div>
            <Overview setSelectedList={setSelectedList} selectedList={selectedList}/>
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>

  );
}

export default App;
