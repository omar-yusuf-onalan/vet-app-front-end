import "./Page.style.css"

const Page = ({entityTemplate}) => {
    return (
        <div className="page">
            <h2>{entityTemplate.name} Management</h2>
        </div>
    )

}

export default Page