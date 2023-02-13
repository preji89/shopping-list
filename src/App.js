import { useState } from 'react';
import Item from './Item';
import { List } from '@mui/material';

import './App.css';


function App() {
 const[items,setItems]= useState([]);

 function onDelete (itemToRemove){
  const newItems = items.filter((item)=>{
       return item !== itemToRemove;
  });
   setItems(newItems);
 }

 function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const input = form.item;
  const newItems = [...items,input.value];
  setItems(newItems);
  form.reset();
 }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <div className="shopping-list">
        <form onSubmit={onSubmit}>
          <input name="item" type="text" placeholder="Add New Item" required></input>
          <button>Add</button>
        </form> 
        <ul>
         {items.map((item,index)=> (
          <Item onDelete={onDelete} item= {item} key={item + index}/>
         ))}
        </ul>

      </div>
      
    </div>
  );
}

export default App;
