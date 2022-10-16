import { useState, useEffect } from "react";

function App() {
  // Create ~~ To do List 
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    } 
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 비어있는 currentArray 을 받아오고
    // input 을 통해 작성한 toDo 와, 비어있는 array의 element가 더해지는 것
    setToDo("");
  };
  const deleteBtn = (index) => {
    const li = index.target.parentElement;
    li.remove();
  };

  return (
    <div> 
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder="Write your to do.."/>
          <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={deleteBtn}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;