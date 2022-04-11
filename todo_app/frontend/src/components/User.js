import React from "react";
import {Link} from "react-router-dom";


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                <Link to={`/user/${user.id}`}>{user.first_name}</Link>
            </td>
            <td>
                {user.id}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.birthday_year}
            </td>
        </tr>
    )
}


const UserList = ({users}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Birthday year</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => <UserItem user={user}/>)}
            </tbody>
        </table>
    )
}


export default UserList