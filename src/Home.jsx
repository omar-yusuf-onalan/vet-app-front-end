const Home = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center p-3">
            <header>
                <h1>Welcome to Veterinary Management System!</h1>
            </header>

            <section className="w-50">
                <h2>About The Project:</h2>
                <p>Our Veterinary Management System aims to streamline the operations of veterinary clinics by providing
                    comprehensive backend and frontend solutions. Whether you're managing appointments, tracking
                    vaccinations, or maintaining customer and animal records, our system is designed to make your
                    workflow more efficient.</p>
            </section>

            <section className="w-50">
                <h2>What It Offers:</h2>
                <ul>
                    <li><strong>Efficient Backend Operations:</strong> We offer a robust backend system that allows for
                        seamless management of veterinarian doctors, customer information, animal records, appointments,
                        vaccinations, and more.
                    </li>
                    <li><strong>User-Friendly Frontend Interface:</strong> Our frontend interface is designed with user
                        experience in mind, providing intuitive navigation and easy access to all functionalities.
                    </li>
                    <li><strong>CRUD Operations:</strong> With Create, Read, Update, and Delete functionalities
                        available for all entities, you have full control over your data.
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Home