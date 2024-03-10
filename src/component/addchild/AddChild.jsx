import "./AddChild.style.css"
import Page from "../page/Page.jsx";

const AddChild = ({childEntityTemplate, refreshContent}) => {
    return (
            <div className="add-child">
                <Page entityTemplate={childEntityTemplate} refreshContent={refreshContent}/>
            </div>
        )
}

export default AddChild