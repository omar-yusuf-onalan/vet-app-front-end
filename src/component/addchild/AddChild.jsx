import "./AddChild.style.css"

const AddChild = ({childEntityTemplate}) => {
    return (
            <div className="add-child">
                {childEntityTemplate.inputs.map(input => (
                    <div>
                    <h3>Add {input.title}</h3>
                    <input
                        placeholder={input.placeholder}
                        type={input.type}
                        value={input.value}
                        name={input.name}
                        title={input.title}
                    />
                    </div>
                    )
                )}
            </div>
        )
}

export default AddChild