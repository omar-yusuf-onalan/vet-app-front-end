import {useEffect, useState} from "react";
import Card from "./Card.jsx";
import AddContent from "./AddContent.jsx";
import Filter from "./Filter.jsx";

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
        <div className="d-flex flex-column p-4 align-items-center">
            <h2>{entityTemplate.name} Management</h2>

            <h3>{entityTemplate.name} List</h3>

            <div className="d-flex flex-column row-gap-3 w-75">


                <div className="d-flex justify-content-center gap-2">
                    {entityTemplate.filters?.map(filter => (
                        <Filter
                            key={filter.filterFunction}
                            filter={filter}
                            setFilteredEntities={setFilteredEntities}
                            entities={entities}
                        />
                    ))}
                </div>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    {filteredEntities.map(entity => {
                        return (

                            <Card
                                key={entity.id}
                                entity={entity}
                                setEntities={setEntities}
                                entityTemplate={entityTemplate}
                            />

                        )
                    })}
                </div>
            </div>

            <AddContent
                entityTemplate={entityTemplate}
                setEntities={setEntities}
                refreshContent={refreshContent}
            />

        </div>
    )

}

export default Page