import './App.css'
import {Route, Routes} from "react-router-dom";
import Page from "./component/page/Page.jsx";
import {entityTemplates} from "./template/EntityTemplates.js";
import Navbar from "./component/navbar/Navbar.jsx";
import {useState} from "react";
import Home from "./Home.jsx";

function App() {
    const [refreshContent, setRefreshContent] = useState(false)

    return (
    <div className="app">
        <Navbar setRefreshContent={setRefreshContent} />

        <Routes>
            <Route path="/" element={<Home />}></Route>

            {entityTemplates.map(entityTemplate => (
                <Route
                    key={entityTemplate.name}
                    path={entityTemplate.path}
                    element={<Page entityTemplate={entityTemplate} refreshContent={refreshContent}/>}
                />
            ))}

        </Routes>
    </div>
    )
}

export default App
