import "./AddContent.style.css"
import {useState} from "react";
import Select from "../select/Select.jsx";
import AddChild from "../addchild/AddChild.jsx";

const AddContent = ({entityTemplate, setEntities}) => {
    const [entityToBeAdded, setEntityToBeAdded] = useState(entityTemplate.entity)

    const handleChange = (event) => {
        setEntityToBeAdded({...entityToBeAdded, [event.target.name]: event.target.value})
    }

    const handleClick = () => {
        entityTemplate.createFunction(entityToBeAdded).then(data => {
            setEntities(prev => [...prev, data])
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
                    <Select key={parent[0].name} relation={parent} setEntityToBeAdded={setEntityToBeAdded}/>
                ))}
            </div>

            <div className="add-content-button">
                <button onClick={handleClick}>Add</button>
            </div>

            {entityTemplate.children?.map(childEntityTemplate => (
                <AddChild childEntityTemplate={childEntityTemplate}/>
            ))}
        </div>
    )
}

export default AddContent