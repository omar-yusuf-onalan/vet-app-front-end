import {
    createAnimal,
    deleteAnimal,
    filterAnimalsByCustomerName,
    filterAnimalsByName,
    getAnimals,
    updateAnimal
} from "../api/AnimalService.js";
import {getCustomers} from "../api/CustomerService.js";

const animalTemplate =
    {
        name: "Animal",
        path: "/animals",
        inputs: [
            {
                placeholder: "Name",
                type: "text",
                value: "name",
                name: "name",
                title: "Name"
            },
            {
                placeholder: "Species",
                type: "text",
                value: "species",
                name: "species",
                title: "Species"
            },
            {
                placeholder:"Breed",
                type: "text",
                value: "breed",
                name: "breed",
                title: "Breed"
            },
            {
                placeholder: "Gender",
                type: "text",
                value: "gender",
                name: "gender",
                title: "Gender"
            },
            {
                placeholder: "Color",
                type: "text",
                value: "color",
                name: "color",
                title: "Color"
            },
            {
                placeholder: "Date of Birth",
                type: "date",
                value: "dateOfBirth",
                name: "dateOfBirth",
                title: "Date of Birth"
            }
        ],
        entity: {
            name: "",
            species: "",
            breed: "",
            gender: "",
            color: "",
            dateOfBirth: "",
            customer: {}
        },
        parents: [
            [
                {
                    name: "customer",
                    option: "name",
                    getFunction: getCustomers,
                },
                {
                    id: 0,
                    name: "",
                    email: "",
                    address: "",
                    city: "",
                    phone: ""
                }
            ]
        ],
        children: [],
        getFunction: getAnimals,
        createFunction: createAnimal,
        updateFunction: updateAnimal,
        deleteFunction: deleteAnimal,
        filters: [
            {
                filterBy: [
                    {
                        index: 0,
                        placeholder:"Name",
                        type: "text",
                        name: "name",
                        title: "Name"
                    },
                ],
                filterFunction: filterAnimalsByName
            },
            {
                filterBy: [
                    {
                        index: 0,
                        placeholder:"Customer Name",
                        type: "text",
                        name: "customerName",
                        title: "Customer Name"
                    },
                ],
                filterFunction: filterAnimalsByCustomerName
            }
        ]
    }

export default animalTemplate