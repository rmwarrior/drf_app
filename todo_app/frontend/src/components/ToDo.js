import React from "react";

const ToDoItem = ({todo}) => {
    return (
        <tr>
            <td>
                {todo.project.name}
            </td>
            <td>
                {todo.user.last_name}
            </td>
            <td>
                {todo.text}
            </td>
        </tr>
    )
}


const ToDoList = ({todos}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Project</th>
                    <th>User</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => <ToDoItem todo={todo}/>)}
            </tbody>
        </table>
    )
}


export default ToDoList
