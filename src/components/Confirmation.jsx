import { useLocation } from "react-router-dom"


export default function Confirmation(){
    const {state} = useLocation()
    console.log(state)
    return (
        <>  
           {state.course ? <h1>You've enrolled {state.course}</h1> : null } 
            {state.name ? <h2>Thank for enrollment, {state.name}</h2> : null}

            {state.gamil ? <h3>We've sent email to {state.gmail}</h3> : null }
        </>
    )
}