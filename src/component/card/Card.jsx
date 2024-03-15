import "./Card.style.css"
import {useEffect, useState} from "react";
import Select from "../select/Select.jsx";

const Card = ({entity, setEntities, entityTemplate}) => {
    const [entityInCard, setEntityInCard] = useState(entity)

    const handleChange = (event) => {
        setEntityInCard({...entityInCard, [event.target.name]: event.target.value})
    };

    useEffect(() => {
        setEntityInCard(entity)
    }, [entity]);

    const handleUpdate = () => {
        entityTemplate.updateFunction(entityInCard).then((data) => {
            setEntities((prev) => [...prev.filter((object) => object.id !== data.id), data]);
        });
    };

    const handleDelete = () => {
        entityTemplate.deleteFunction(entityInCard.id).then(() => {
            setEntities((prev) => [...prev.filter((object) => object.id !== entityInCard.id)])
        });
    };

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
                    relation={parent}
                    entity={entityInCard}
                    setEntity={setEntityInCard}
                />
            ))}

            <div>

            <button onClick={handleUpdate}>Update</button>

            <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Card