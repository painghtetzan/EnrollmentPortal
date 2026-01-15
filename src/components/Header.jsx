import { NavLink,Link } from "react-router-dom";
import rplog from "../assets/rp-1024x640.jpg"


export default function Header(){
    return (
        <>  
        <div className="header">

       
            <Link>
            <img src={rplog} className="logo" />
            </Link>
 
            <nav>
                <NavLink to='/' className={({isActive})=>isActive? 'nav-active': null}>Home</NavLink>
                <NavLink to='/courses' className={({isActive})=>isActive? 'nav-active': null}>Courses</NavLink>
                <NavLink to='/register' className={({isActive})=>isActive? 'nav-active': null}>Register</NavLink>
            </nav>
        </div>
        </>
    )
}