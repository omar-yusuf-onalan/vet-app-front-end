import "./Page.style.css"
import {useEffect, useState} from "react";
import Card from "../card/Card.jsx";
import AddContent from "../addcontent/AddContent.jsx";
import Filter from "../filter/Filter.jsx";

const Page = ({entityTemplate, refreshContent}) => {
    const [entities, setEntities] = useState([])
    const [filteredEntities, setFilteredEntities] = useState([])

    useEffect(() => {
        entityTemplate.getFunction().then(data => {
            setEntities(data)
            setFilteredEntities(data)
        })

    }, [refreshContent]);

    useEffect(() => {
        setFilteredEntities(entities)
    }, [entities]);

    return (
        <div className="page">
            <h2>{entityTemplate.name} Management</h2>

            <div className="page-content-container">
                <h3>{entityTemplate.name} List</h3>

                <div className="filters-in-page">
                {entityTemplate.filters?.map(filter => (
                    <Filter
                        key={filter.filterFunction}
                        filter={filter}
                        setFilteredEntities={setFilteredEntities}
                    />
                ))}
                </div>
                {filteredEntities.map(entity => {
                    return (
                        <div key={entity.id} className="card-container">
                            <Card
                                entity={entity}
                                setEntities={setEntities}
                                entityTemplate={entityTemplate}
                            />
                        </div>
                    )
                })}
            </div>

            <AddContent entityTemplate={entityTemplate} setEntities={setEntities}/>
        </div>
    )

}

export default Page