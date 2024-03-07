import './App.css'
import {Route, Routes} from "react-router-dom";
import Page from "./component/page/Page.jsx";
import {entityTemplates} from "./template/EntityTemplates.js";
import Navbar from "./component/navbar/Navbar.jsx";

function App() {
  return (
    <div className="app">
        <Navbar/>

        <Routes>
            {entityTemplates.map(entityTemplate => (
                <Route
                    key={entityTemplate.name}
                    path={entityTemplate.path}
                    element={<Page entityTemplate={entityTemplate}/>}
                />
            ))}

        </Routes>
    </div>
  )
}

export default App
