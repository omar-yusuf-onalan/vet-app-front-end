import {useState} from "react";

const Filter = ({filter, setFilteredEntities, entities}) => {
    const [inputValue, setInputValue] = useState([])

    const handleChange = (event, index) => {
        setInputValue(prev => {
            let newArray = [...prev]

            newArray[index] = event.target.value

            return newArray
            }
        )
    }

    const handleClick = () => {
        let isEmpty = true
        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i].length !== 0) {
                isEmpty = false
            }
        }

        if (isEmpty) {
            setFilteredEntities(entities)
            return
        }

        filter.filterFunction(...inputValue).then(data => {
            setFilteredEntities(data)
        })
    }

    return (
        <div className="d-flex justify-content-start gap-2">
            {filter.filterBy.map(argument => (
                <input key={argument.name}
                       className="border-dark rounded"
                       onChange={(event) => handleChange(event, argument.index)}
                       placeholder={argument.placeholder}
                       type={argument.type}
                       name={argument.name}
                       title={argument.title}
                       value={inputValue[argument.index]}
                />
            ))}

            <button className="btn btn-outline-primary" onClick={handleClick}>Search</button>
        </div>
    )
}

export default Filter