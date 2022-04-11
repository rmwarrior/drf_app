import React from "react"
import {useParams} from "react-router-dom";


const  ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.id}
            </td>
            <td>
                {project.name}
            </td>
            <td>
                {project.users.map(user => <div>{user.last_name}</div>)}
            </td>
        </tr>
    )
}


const UserProjectList = ({projects}) => {
    console.log(projects)

    let {id} = useParams()
    let intId = parseInt(id)
    console.log(intId)

    // let filter_item = projects.filter((project => project.users.includes(parseInt(id))))
    let filter_item = projects.filter( (project =>
        ((project.users.length > 0) && (project.users.filter(user => user.id===intId)))) )
    console.log(filter_item)

    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User</th>
                </tr>
            </thead>
            <tbody>
                {filter_item.map((project) => <ProjectItem project={project}/>)}
            </tbody>
        </table>
    )
}


export default UserProjectList