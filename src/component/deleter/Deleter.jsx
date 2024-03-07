import "./Deleter.style.css"

const Deleter = ({handlerFunction}) => {
    return (
        <div className="deleter">
            <button onClick={handlerFunction}>Delete</button>
        </div>
    )
}

export default Deleter