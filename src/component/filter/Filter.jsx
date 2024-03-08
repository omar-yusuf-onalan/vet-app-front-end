import "./Filter.style.css"
import {useState} from "react";

const Filter = ({filter, setFilteredEntities}) => {
    const [inputValue, setInputValue] = useState([])

    const handleChange = (event, index) => {
        setInputValue(prev => {
            let newArray = prev

            newArray[index] = event.target.value

            return newArray
        })

        filter.filterFunction(inputValue).then(data => {
            setFilteredEntities(data)
        })
    }

    return (
        <div className="filter">

            {filter.filterBy.map(argument => (
                <input key={argument.name} onChange={() => handleChange(event, argument.index)}
                       placeholder={argument.placeholder}
                       type={argument.type}
                       name={argument.name}
                       title={argument.title}
                       value={inputValue}
                />
            ))}

        </div>
    )
}

export default Filter