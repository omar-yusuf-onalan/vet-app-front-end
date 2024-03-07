import React, { useState, useEffect } from 'react';

const Select = ({ relation, setEntityToBeAdded }) => {
    const [entities, setEntities] = useState()
    const [selectedEntityId, setSelectedEntityId] = useState(0)

    useEffect(() => {
        relation[0].getFunction().then(data => {
            setEntities(data)
        })
    }, [])

    const handleChange = (event) => {
        const selectedId = parseInt(event.target.value)
        setSelectedEntityId(selectedId)
        const selectedEntity = entities?.find(entity => entity.id === selectedId)
        setEntityToBeAdded(prev => ({ ...prev, [relation[0].name]: selectedEntity }))
    }

    return (
        <div className="select">
            <select onChange={handleChange} value={selectedEntityId}>
                <option value={null}>Select a {relation[0].name}</option>
                {entities?.map(mappedEntity => (
                    <option key={mappedEntity.id} value={mappedEntity.id}>{mappedEntity[relation[0].option]}</option>
                ))}
            </select>
        </div>
    )
}

export default Select