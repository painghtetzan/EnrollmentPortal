import { getCourses } from "../data"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

export default function Register(){

    const nameref = useRef(null)
    const gmailref = useRef(null)
    const coursenameref = useRef(null)
    

    const courses = getCourses()
    const navigate = useNavigate()
    function submit(event){
        event.preventDefault()
        navigate('/confirmation',{state:{name:nameref.current.value,gmail:gmailref.current.value,course:coursenameref.current.value}})
    }
    return (
        <>
            <h2>Register your interest!</h2>
            <h3>Please fill the form for enrollment.</h3>

            <form onSubmit={submit} className="form">
                <label for='name'>Name: <input id="name" name='name' ref={nameref} /></label>
                
                <label for='gmail'>Gmail: <input id="gmail" name='gmail' ref={gmailref} /></label>
                
                <label for="course">Diploma: <select id="course" name="course" ref={coursenameref} >
                    {courses.map(course=> {return (
                       <option key={course.id} value={course.name}>{course.id} | {course.name} a</option>)}
                    )}
                </select></label>
                

                <button type="Submit">Submit</button>
            </form>
        </>
    )
}