import "./AddContent.style.css"
import {useContext, useState} from "react";
import Select from "../select/Select.jsx";
import AddChild from "../addchild/AddChild.jsx";
import ErrorContext from "../../context/error/ErrorContext.jsx";

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
            }, 5000)
        })

        setEntityToBeAdded(entityTemplate.entity)
    }

    return (
        <div className="add-content">
            <div className="add-content-inputs">
                {entityTemplate.inputs.map(input => (
                    <input
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
                <button onClick={handleClick}>Add</button>
            </div>
            
            {entityTemplate.children?.map(childEntityTemplate => (
                <AddChild childEntityTemplate={childEntityTemplate} refreshContent={refreshContent}/>
            ))}

        </div>
    )
}

export default AddContent