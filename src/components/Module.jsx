import { useParams } from "react-router-dom";
import { getModule } from "../data";


export default function Module(){

    const {courseid} = useParams()
    const {moduleid} = useParams()
    const module = getModule(courseid,moduleid)
    console.log(module)
    return (
        <>
            <h3>{module.lecturer}</h3>
            <p>{module.description}</p>
        </>
    )
}