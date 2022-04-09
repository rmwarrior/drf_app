import React from "react";
import {Link} from "react-router-dom";


const MenuList = () => {
    return(
        <table>
            <tbody>
                <tr>
                    <nav>
                        <td><Link to='/'>Users</Link></td>
                        <td><Link to='/projects'>Projects</Link></td>
                        <td><Link to='/todos'>ToDos</Link></td>
                    </nav>
                </tr>
            </tbody>
        </table>
    )
}


export default MenuList