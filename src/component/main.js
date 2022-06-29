// import './first.css'
import React, { useState } from "react";
function Myfunction(){
    const[todo,setTodo]=useState('abc')
    console.log('hello')
    return(
        <div>
            <div>
                {/* header */}
                <h1> Things to do </h1>

            </div>
            <div>
                {/* input */}
                <input type='text' name="todo" value={todo}  placeholder='value'/>
            </div>
            <div>
                {/* listing */}
                <ul>
                    <li>todo1</li>
                    <li>todo1</li>
                    <li>todo1</li>
                </ul>

            </div>
            <div>
                {/* footer */}
            </div>
        </div>
    )
}
export default Myfunction;