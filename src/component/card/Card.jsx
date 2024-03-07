import "./Card.style.css"
import {useEffect} from "react";

const Card = ({entity, inputs}) => {
    return (
        <div className="card">
            {inputs.map(input => {
                return (
                    <div key={input.placeholder} className="card-content">
                        <h3>{input.title}</h3>
                        <input
                            placeholder={input.placeholder}
                            type={input.type}
                            title={input.title}
                        />
                    </div>
                )
                }
            )}
        </div>
    )
}

export default Card