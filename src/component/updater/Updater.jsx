import "./Updater.style.css"

const Updater = ({handlerFunction}) => {
    return (
        <div className="updater">
            <button onClick={handlerFunction}>Update</button>
        </div>
    )
}

export default Updater