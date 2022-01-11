import React, { useState } from 'react';
import './App.css';

function App() {
  const [ToDos, setToDos] = useState([])
  const [todo, setTodo] = useState("")

  function addToDos() {
    if (todo.length === 0) {
      alert("Input Field is empty....!!")
    } else {
      setToDos([...ToDos, { id: Date.now(), text: todo, status: false, finish: false }])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1 className='main-todo-h1'>TODO APP</h1>
        <div className=''>
          <input value={todo} onChange={(e) => setTodo(e.target.value)} className='todo-head-inp' type="text" placeholder='Enter ToDo' />
          <i onClick={addToDos} class="fas fa-plus-square"></i>
        </div>
      </div>

      {

        ToDos.map((mapData) => {
          return (
            <div className={mapData.finish === true ? 'finish-todo-bottom-show' : 'todo-bottom-show'}>
              <i onClick={() => {
                setToDos(ToDos.filter(FilObj2 => {
                  if (mapData.id === FilObj2.id) {
                    FilObj2.finish = FilObj2.finish === false ? true : false
                  }
                  return FilObj2
                }))
              }} className={mapData.finish === true ? 'fas fa-times-circle' : 'fas fa-check-circle'}></i>
              <i onClick={() => {
                setToDos(ToDos.filter(Filobj => mapData.id != Filobj.id))
              }} className={'far fa-trash-alt'}></i>
              <p className={mapData.finish === true ? 'finish-todo' : 'todo-show-txt'}>{mapData.text}</p>
            </div>
          )
        })}

    </div>
  );
}

export default App;
