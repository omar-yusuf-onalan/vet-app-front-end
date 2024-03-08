import {
    createVaccine,
    deleteVaccine, filterVaccinesByAnimalName, filterVaccinesByTwoDates,
    getVaccines,
    updateVaccine
} from "../api/VaccineService.js";
import {filterAnimalsByName, getAnimals} from "../api/AnimalService.js";
import {getCustomers} from "../api/CustomerService.js";

const vaccineTemplate =
    {
        name: "Vaccine",
        path: "/vaccines",
        inputs: [
            {
                placeholder: "Name",
                type: "text",
                value: "name",
                name: "name",
                title: "Name"
            },
            {
                placeholder: "Code",
                type: "text",
                value: "code",
                name: "code",
                title: "Code"
            },
            {
                placeholder:"Protection Start Date",
                type: "date",
                value: "protectionStartDate",
                name: "protectionStartDate",
                title: "Protection Start Date"
            },
            {
                placeholder:"Protection Finish Date",
                type: "date",
                value: "protectionFinishDate",
                name: "protectionFinishDate",
                title: "Protection Finish Date"
            },
            ],
        entity: {
            name: "",
            code: "",
            protectionStartDate: "",
            protectionFinishDate: "",
            animal: {},
            report: {}
        },
        parents: [
            [
                {
                    name: "animal",
                    option: "name",
                    getFunction: getAnimals,
                },
                {
                    id: 0,
                    name: "",
                    species: "",
                    breed: "",
                    gender: "",
                    color: "",
                    dateOfBirth: "",
                }
            ]
        ],
        children: [],
        getFunction: getVaccines,
        createFunction: createVaccine,
        updateFunction: updateVaccine,
        deleteFunction: deleteVaccine,
        filters: [
            {
                filterBy: [
                    {
                        index: 0,
                        placeholder:"Animal Name",
                        type: "text",
                        name: "animalName",
                        title: "Animal Name"
                    },
                ],
                filterFunction: filterVaccinesByAnimalName
            },
            {
                filterBy: [
                    {
                        index: 0,
                        placeholder:"Start Date",
                        type: "date",
                        name: "startDate",
                        title: "Start Date"
                    },
                    {
                        index: 1,
                        placeholder:"Finish Date",
                        type: "date",
                        name: "finishDate",
                        title: "Finish Date"
                    }
                ],
                filterFunction: filterVaccinesByTwoDates
            },
        ]
    }

export default vaccineTemplate