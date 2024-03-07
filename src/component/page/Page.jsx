import "./Page.style.css"
import {useEffect, useState} from "react";
import Card from "../card/Card.jsx";

const Page = ({entityTemplate}) => {
    const [entities, setEntities] = useState([])

    useEffect(() => {
        entityTemplate.getFunction().then(data => {
            setEntities(data)
        })
    }, []);

    return (
        <div className="page">
            <h2>{entityTemplate.name} Management</h2>

            <div className="page-content-container">
                <h3>{entityTemplate.name} List</h3>

                {entities.map(entity => {
                    return (
                        <div key={entity.id} className="card-container">
                            <Card
                                entity={entity}
                                inputs={entityTemplate.inputs}
                                setEntities={setEntities}
                                entityTemplate={entityTemplate}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default Page