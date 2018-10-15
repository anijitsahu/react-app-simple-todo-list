import React from 'react';

// components 
import Title from './components/Title';
import ItemList from './components/ItemList';

// css
import './css/style.css'

const App = () => {
  return (
    <div className="container">
    	{ /* including the Title and other components */ }
  		<Title />
  		<ItemList />
  	</div>
  );
};



export default App;