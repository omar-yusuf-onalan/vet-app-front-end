import {useContext, useState} from "react";
import Select from "./Select.jsx";
import AddChild from "./AddChild.jsx";
import ErrorContext from "../context/error/ErrorContext.jsx";

const AddContent = ({entityTemplate, setEntities, refreshContent}) => {
    const [entityToBeAdded, setEntityToBeAdded] = useState(entityTemplate.entity)

    const {setShowError, setErrorMessage} = useContext(ErrorContext)

    const handleChange = (event) => {
        setEntityToBeAdded({...entityToBeAdded, [event.target.name]: event.target.value})
    }

    const handleClick = () => {
        entityTemplate.createFunction(entityToBeAdded).then(data => {
            setEntities(prev => [...prev, data])
        }).catch((error)=> {

            setShowError(true)
            setErrorMessage(JSON.stringify(error.message))

            setTimeout(() => {
                setShowError(false)
            }, 2000)
        })

        setEntityToBeAdded(entityTemplate.entity)
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
            <h3>Add {entityTemplate.name}</h3>

            <div>
                {entityTemplate.inputs.map(input => (
                    <input
                        className="border-dark rounded"
                        key={input.name}
                        onChange={handleChange}
                        placeholder={input.placeholder}
                        type={input.type}
                        title={input.title}
                        name={input.name}
                        value={entityToBeAdded[input.value]}
                    />
                ))}
            </div>

            <div className="add-content-selects">
                {entityTemplate.parents.map(parent => (
                    <Select
                        key={parent[0].name}
                        relation={parent}
                        entity={entityToBeAdded}
                        setEntity={setEntityToBeAdded}
                    />
                ))}
            </div>

            <div className="add-content-button">
                <button className="btn btn-outline-primary" onClick={handleClick}>Add</button>
            </div>
            
            {entityTemplate.children?.map(childEntityTemplate => (
                <AddChild childEntityTemplate={childEntityTemplate} refreshContent={refreshContent}/>
            ))}

        </div>
    )
}

export default AddContent