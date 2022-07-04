// import './first.css'
import React, { useState } from "react";
function App() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([
    { name: "abc", completed: false, editable: false },
  ]);
  const [editTodo, setEditTodo] = useState("");

  const deleteItem = (index) => {
    const updatedTodos = [...todos];

    updatedTodos.splice(index, 1);

    setTodos(updatedTodos);
  };
  const addItem = () => {
    if (!todo) {
    } else {
      const updatedTodos = [...todos];
      updatedTodos.push({ name: todo, completed: false, editable: false });
      setTodos(updatedTodos);
      setTodo("");
    }
  };

  const editItem = (index, currentName) => {
    // setEditTodo(currentName);
    const updatedTodos = [...todos];
    const found = todos.find((item) => item.editable === true);
    if (!found) {
      updatedTodos[index] = { ...updatedTodos[index], editable: true };
      setTodos(updatedTodos);
      setEditTodo(updatedTodos[index].name);
    } else {
      alert("complete first");
      return;
    }
  };
  const editItemChange = (e, index) => {
    const value = e.target.value;
    setEditTodo(value);
  };

  const updatedItem = (index) => {
    // const value = ;

    const updatedTodos = [...todos];

    if (!editTodo) {
      updatedTodos[index] = {
        ...updatedTodos[index],
        editable: false,
      };
    } else {
      updatedTodos[index] = {
        ...updatedTodos[index],
        name: editTodo,
        editable: false,
      };
    }

    setTodos(updatedTodos);
  };

  const handleComplete = (completed, index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], completed:completed };
    setTodos(updatedTodos);
  };

  return (
    <div>
      <div>
        {/* header */}
        <h1> Things to do </h1>
      </div>
      <div style={{ display: "flex" }}>
        {/* input */}

        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="value"
        />
        <div>
          <button onClick={addItem}>Add</button>
        </div>
      </div>
      <div>
        {/* listing */}
        <ul>
          {todos.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <input
                    type="checkbox"
                    name="completed"
                    value="completed"
                    checked={item.completed}
                    onChange={(e) => {
                      handleComplete(e.target.checked, index);
                    }}
                  />

                  {/* <input type="checkbox" /> */}
                  {/* <span>{item.name}</span>
                  <input name="editTodo" value={item.name} /> */}
                  {item.editable ? (
                    <input
                      name="editTodo"
                      value={editTodo}
                      onChange={(e) => {
                        editItemChange(e, index);
                      }}
                    />
                  ) : (
                    <span>{item.name}</span>
                  )}
                </div>

                <div>
                  <button
                    onClick={(e) => {
                      deleteItem(index, e);
                    }}
                  >
                    delete
                  </button>
                  <button
                    onClick={(e) => {
                      item.editable
                        ? updatedItem(index)
                        : editItem(index, item.name);
                    }}
                  >
                    {item.editable ? "update" : "edit"}
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
