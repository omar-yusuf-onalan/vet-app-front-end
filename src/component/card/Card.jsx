import "./Card.style.css"
import {useEffect, useState} from "react";
import Updater from "../updater/Updater.jsx";
import {handleDelete, handleUpdate} from "../../handler/CRUDHandler.js";
import Deleter from "../deleter/Deleter.jsx";

const Card = ({entity, inputs, setEntities, entityTemplate}) => {
    const [entityInCard, setEntityInCard] = useState(entity)

    const handleChange = (event) => {
        setEntityInCard({...entityInCard, [event.target.name]: event.target.value})
    };

    return (
        <div className="card">
            {inputs.map(input => {
                return (
                    <div key={input.placeholder}>
                        <h3>{input.title}</h3>
                        <input
                            onChange={handleChange}
                            placeholder={input.placeholder}
                            type={input.type}
                            title={input.title}
                            name = {input.name}
                            value={entityInCard[input.value]}
                        />

                    </div>

                )
                }
            )}

            <Updater handlerFunction={
                () => handleUpdate(entityInCard, setEntities, entityTemplate.updateFunction)}
            />

            <Deleter handlerFunction={
                () => handleDelete(entityInCard, setEntities, entityTemplate.deleteFunction)}
            />
        </div>
    )
}

export default Card