import Header from "./Header"
import Home from "./Home"
import Courses from "./Courses"
import Register from "./Register"
import { Routes,Route } from "react-router-dom"
import Modules from "./Modules"
import Module from "./Module"
import Confirmation from "./Confirmation"
function App (){
    return (
        <>  
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />}>
                    <Route path=":courseid" element={<Modules />}>
                        <Route path=":moduleid" element={<Module />} />
                        <Route index element={<h3>Select modules to see details</h3>} />
                    </Route>
                    <Route index element={<h4>Select Courses above to see their moduels</h4>} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Routes>
            
            
        </>
    )
}

export default App