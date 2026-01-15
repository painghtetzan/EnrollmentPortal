import { getCourses } from "../data"
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"
export default function Courses(){
    const courese = getCourses()
    const getclass = (({isActive})=>(isActive? 'liactive' : null))
    return (
        <>
            <h1>Diploma</h1>

            <ul className="courseul">
                {courese.map((course)=> (
                    <li key={course.id} ><NavLink className={getclass} to={course.id}>{course.name}</NavLink></li>
                ))}
            </ul>

            <Outlet />
        </>
    )
}