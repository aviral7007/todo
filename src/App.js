// import './first.css'
import React, { useState } from "react"
function App(){
    const[todo,setTodo]=useState('abc')
    console.log('hello')
     const[todos,setTodos]=useState(['todo1','todo2'])
    return(
        <div>
            <div>
                {/* header */}
                <h1> Things to do </h1>

            </div>
            <div>
                {/* input */}
                <input type='text' name="todo" value={todo} onChange={(e)=>{(setTodo(e.target.value))}} placeholder='value'/>
            </div>
            <div>
                {/* listing */}
              <ul>{
                todos.map((item)=>{
                  return(

                    <li>{item}</li>
                  )
                })
                }
                    
                </ul>

            </div>
            <div>
                {/* footer */}
                <button onClick={(e)=>{
                  const updatedTodos=[...todos]
                  updatedTodos.push(todo)
                  setTodos(updatedTodos)
                }}>Add</button>
            </div>
        </div>
    )
}
export default App;