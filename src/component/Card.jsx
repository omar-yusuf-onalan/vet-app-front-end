import {useContext, useEffect, useState} from "react";
import Select from "./Select.jsx";
import ErrorContext from "../context/error/ErrorContext.jsx";

const Card = ({entity, setEntities, entityTemplate}) => {
    const [entityInCard, setEntityInCard] = useState(entity)

    const {setShowError, setErrorMessage} = useContext(ErrorContext)

    const handleChange = (event) => {
        setEntityInCard({...entityInCard, [event.target.name]: event.target.value})
    };

    useEffect(() => {
        setEntityInCard(entity)
    }, [entity]);

    const handleUpdate = () => {
        entityTemplate.updateFunction(entityInCard).then((data) => {
            setEntities((prev) => [...prev.filter((object) => object.id !== data.id), data]);
        }).catch((error)=> {

            setShowError(true)
            setErrorMessage(JSON.stringify(error.message))

            setTimeout(() => {
                setShowError(false)
            }, 2000)
        });
    };

    const handleDelete = () => {
        entityTemplate.deleteFunction(entityInCard.id).then(() => {
            setEntities((prev) => [...prev.filter((object) => object.id !== entityInCard.id)])
        }).catch((error)=> {

            setShowError(true)
            setErrorMessage(JSON.stringify(error.message))

            setTimeout(() => {
                setShowError(false)
            }, 2000)
        });
    };

    return (
        <div className="card d-flex justify-content-center col-3 align-items-center p-2 border-dark rounded">
            <div className="card-body d-flex justify-content-center flex-column row-gap-3">
            {entityTemplate.inputs.map(input => {
                    return (
                        <div key={`${entityTemplate.name}${input.placeholder}`}>
                            <h3 className="card-title">{input.title}</h3>
                            <input
                                className="card-text border-dark rounded"
                                onChange={handleChange}
                                placeholder={input.placeholder}
                                type={input.type}
                                title={input.title}
                                name={input.name}
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

            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary" onClick={handleUpdate}>Update</button>

                <button className="btn btn-outline-primary" onClick={handleDelete}>Delete</button>
            </div>
            </div>
        </div>
    )
}

export default Card