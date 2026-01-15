import { useParams,NavLink,Outlet } from "react-router-dom"
import { getModules } from "../data"
export default function Modules(){
    const { courseid } = useParams()
  
    const modules = getModules(courseid)
    
    return (
        <>
        <ul>
            {modules.map((module)=>
            <li key={module.id}>
                <NavLink to={module.id} className={({isActive})=>isActive? "liactive":null} >
                    {module.id} | {module.name}
                </NavLink>
            </li>
                
                       
            )}
        </ul>

        <Outlet />
            
        </>
    )
}