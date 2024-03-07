import './App.css'
import {Route, Routes} from "react-router-dom";
import Page from "./component/page/Page.jsx";
import {customerTemplate} from "./template/EntityTemplates.js";

function App() {
  return (
    <div className="app">
        <Routes>
            <Route path="/customers" element={<Page entityTemplate={customerTemplate}/>}/>
        </Routes>
    </div>
  )
}

export default App
