import React, {useState} from 'react';

function App() {
  const [todoText,setTodoText] = useState("")
  const [todoData, setTodoData] = useState([])

  function handleChange(event) {
    setTodoText(event.target.value)
}

  function handleSubmit(event) {
    event.preventDefault()
    setTodoData(prevTodoData => [...prevTodoData, todoText])
    setTodoText("")
  }

  const finalTodoData = todoData.map(todoItem => <p key={todoItem}>{todoItem}</p>)

return (
  <div>
      <form onSubmit={handleSubmit} >
      <label>
        New Todo Item:
        <input 
          placeholder="add todo"
          type="text" 
          name="todoItem"
          value={todoText} 
          onChange={handleChange} 
        />
      </label>
      <input 
          type="submit"  
          value="Submit" />
    </form>

    <div>{finalTodoData}</div>
  </div>
)
}

export default App;
