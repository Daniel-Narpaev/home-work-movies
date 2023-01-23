import './App.css';
import Header from ".//components/header/Header"
import Main from ".//components/main/Main"
import { useState } from 'react';

function App() {

  const [list, setList] = useState([
    {
      id:1,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWr4HVTvL9Mizj4dpW3qfR-oyFGpTXx6wXg&usqp=CAU",
      title:"NARUTO",
      rating:"5/5 stars"
    },
    {
      id:2,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWr4HVTvL9Mizj4dpW3qfR-oyFGpTXx6wXg&usqp=CAU",
      title:"NARUTO",
      rating:"5/5 stars"
    },
  ])
 
  const AddNewList = (data) => {
    console.log(data);
    const updateList = [...list]
    updateList.push(data)
    setList(updateList)
  }
  const deleteMovie = (id) => {
     setList(list.filter(el=>el.id !== id))
  }
  return (
    <div className="App">
      <Header onAddNewList={AddNewList}/>
      <Main list={list} onDelete={deleteMovie}/>
    </div>
  );
}

export default App;

