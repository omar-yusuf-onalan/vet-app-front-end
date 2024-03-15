import React, {useEffect, useState} from 'react';

const Select = ({relation, entity, setEntity }) => {
    const [entities, setEntities] = useState()

    useEffect(() => {
        relation[0].getFunction().then(data => {
            setEntities(data)
        })
    }, [])

    const handleChange = (event) => {
        const newObject = entities.find(obj => obj.id === parseInt(event.target.value))
        setEntity(prev => ({...prev, [relation[0].name]: newObject}))
    }

    return (
        <div className="border-dark rounded">
            <select onChange={handleChange} value={entity[relation[0].name]?.id || ""}>
                <option className="border-dark rounded" value="">Select {relation[0].name}</option>
                {entities?.map(mappedEntity => (
                    <option className="border-dark rounded" key={mappedEntity.id} value={mappedEntity.id}>{mappedEntity[relation[0].option]}</option>
                ))}
            </select>
        </div>
    )
}

export default Select