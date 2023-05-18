import './App.css';
import React, { useReducer, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import AddItem from './components/AddItem';
import List from './components/List';
const initialList = [
  {
    id: 'a',
    name: 'Robin'
  },
  {
    id: 'b',
    name: 'Dennis',
  },
]
const listReducer = (state, action)=>{
  switch(action.type){
    case 'ADD_ITEM':
      return state.concat({name: action.name, id: action.id});
    default:
      throw new Error()
  }
}
function App() {
  const [list, dispathList] = useReducer(
    listReducer,
    initialList
  )
  const [name, setName] = useState('');
  function handleChange(e){
    setName(e.target.value)
  }
  function handleAdd(){
    dispathList({
      type: 'ADD_ITEM',
      name, 
      id: uuidv4()
    })
    setName(" ")
  }
  return (
    <div>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
      />
      <List list={list} />
    </div>
  );
}

export default App;
