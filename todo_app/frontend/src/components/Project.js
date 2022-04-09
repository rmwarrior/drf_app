import React from "react";


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.id}
            </td>
            <td>
                {project.name}
            </td>
            <td>
                {project.users.toString()}
            </td>
        </tr>
    )
}


const ProjectList = ({projects}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Users</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => <ProjectItem project={project}/>)}
            </tbody>
        </table>
    )
}


export default ProjectList
