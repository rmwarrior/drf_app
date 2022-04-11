import React from "react";
import {Link} from "react-router-dom";


const MenuList = () => {
    return(
        <table>
            <tbody>
                <tr>

                        <td><nav><Link to='/'>Users</Link></nav></td>
                        <td><nav><Link to='/projects'>Projects</Link></nav></td>
                        <td><nav><Link to='/todos'>ToDos</Link></nav></td>

                </tr>
            </tbody>
        </table>
    )
}


export default MenuList