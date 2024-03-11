import "./Select.style.css"
import React, {useEffect, useState} from 'react';

const Select = ({parentId, relation, setEntityToBeAdded }) => {
    const [entities, setEntities] = useState()
    const [selectedOption, setSelectedOption] = useState({id: parentId})

    useEffect(() => {
        relation[0].getFunction().then(data => {
            setEntities(data)
        })
    }, [])

    const handleChange = (event) => {
        // Made new object because using selectedOption for setting values resulted in null values
        // as the values are set after handleChange is finished executing
        const newObject = entities.find(obj => obj.id === parseInt(event.target.value))
        setSelectedOption(newObject)
        setEntityToBeAdded(prev => ({...prev, [relation[0].name]: newObject}))
    }

    return (
        <div className="select">
            <select onChange={handleChange} value={selectedOption?.id}>
                <option value="">Select a {relation[0].name}</option>
                {entities?.map(mappedEntity => (
                    <option key={mappedEntity.id} value={mappedEntity.id}>{mappedEntity[relation[0].option]}</option>
                ))}
            </select>
        </div>
    )
}

export default Select