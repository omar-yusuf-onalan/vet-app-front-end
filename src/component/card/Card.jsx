import "./Card.style.css"
import {useEffect, useState} from "react";
import Updater from "../updater/Updater.jsx";
import {handleDelete, handleUpdate} from "../../handler/CRUDHandler.js";
import Deleter from "../deleter/Deleter.jsx";
import Select from "../select/Select.jsx";

const Card = ({entity, setEntities, entityTemplate}) => {
    const [entityInCard, setEntityInCard] = useState(entity)

    const handleChange = (event) => {
        setEntityInCard({...entityInCard, [event.target.name]: event.target.value})
    };

    useEffect(() => {
        setEntityInCard(entity)
    }, [entity]);

    return (
        <div className="card">
            {entityTemplate.inputs.map(input => {
                return (
                    <div key={`${entityTemplate.name}${input.placeholder}`}>
                        <h3>{input.title}</h3>
                        <input
                            onChange={handleChange}
                            placeholder={input.placeholder}
                            type={input.type}
                            title={input.title}
                            name ={input.name}
                            value={entityInCard[input.value]}
                        />

                    </div>

                )
                }
            )}

            {entityTemplate.parents?.map(parent => (
                <Select
                    key={parent[0].name}
                    parentId={entityInCard[parent[0].name] ? entityInCard[parent[0].name].id : ""}
                    relation={parent}
                    setEntityToBeAdded={entityInCard}
                />
            ))}

            <div>
            <Updater handlerFunction={
                () => handleUpdate(entityInCard, setEntities, entityTemplate.updateFunction)}
            />

            <Deleter handlerFunction={
                () => handleDelete(entityInCard, setEntities, entityTemplate.deleteFunction)}
            />
            </div>
        </div>
    )
}

export default Card