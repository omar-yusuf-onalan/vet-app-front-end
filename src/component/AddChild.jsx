import Page from "./Page.jsx";

const AddChild = ({childEntityTemplate, refreshContent}) => {
    return (
            <div className="w-100">
                <Page entityTemplate={childEntityTemplate} refreshContent={refreshContent}/>
            </div>
        )
}

export default AddChild