import './App.css'
import {Route, Routes} from "react-router-dom";
import Page from "./component/page/Page.jsx";
import {entityTemplates} from "./template/EntityTemplates.js";
import Navbar from "./component/navbar/Navbar.jsx";
import {useContext, useState} from "react";
import Home from "./Home.jsx";
import ErrorContext from "./context/error/ErrorContext.jsx";

function App() {
    const [refreshContent, setRefreshContent] = useState(false)

    const {showError, errorMessage} = useContext(ErrorContext)

    return (
    <div className="app">
        <Navbar setRefreshContent={setRefreshContent} />

        {showError && <div>{errorMessage}</div>}

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
