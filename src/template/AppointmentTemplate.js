import {
    createAppointment,
    deleteAppointment, filterAppointmentsByAnimalNameAndTwoDates, filterAppointmentsByDoctorNameAndTwoDates,
    getAppointments,
    updateAppointment
} from "../api/AppointmentService.js";
import {getDoctors} from "../api/DoctorService.js";
import {getAnimals} from "../api/AnimalService.js";
import {filterVaccinesByTwoDates} from "../api/VaccineService.js";

const appointmentTemplate =
    {
        name: "Appointment",
        path: "/appointments",
        inputs: [
            {
                placeholder: "Appointment Date",
                type: "datetime-local",
                value: "appointmentDate",
                name: "appointmentDate",
                title: "Appointment Date"
            },
            ],
        entity: {
            appointmentDate: "",
            doctor: {},
            animal: {}
        },
        parents: [
            [
                {
                    name: "doctor",
                    option: "name",
                    getFunction: getDoctors,
                },
                {
                    id: 0,
                    name: "",
                    email: "",
                    address: "",
                    city: "",
                    phone: ""
                }
            ],
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
        getFunction: getAppointments,
        createFunction: createAppointment,
        updateFunction: updateAppointment,
        deleteFunction: deleteAppointment,
        filters: [
            {
                filterBy: [
                    {
                        index: 0,
                        placeholder:"Doctor Name",
                        type: "text",
                        name: "doctorName",
                        title: "Doctor Name"
                    },
                    {
                        index: 1,
                        placeholder:"Start Date",
                        type: "date",
                        name: "startDate",
                        title: "Start Date"
                    },
                    {
                        index: 2,
                        placeholder:"Finish Date",
                        type: "date",
                        name: "finishDate",
                        title: "Finish Date"
                    }
                ],
                filterFunction: filterAppointmentsByDoctorNameAndTwoDates
            },
            {
                filterBy: [
                    {
                        index: 0,
                        placeholder:"Animal Name",
                        type: "text",
                        name: "animalName",
                        title: "Animal Name"
                    },
                    {
                        index: 1,
                        placeholder:"Start Date",
                        type: "date",
                        name: "startDate",
                        title: "Start Date"
                    },
                    {
                        index: 2,
                        placeholder:"Finish Date",
                        type: "date",
                        name: "finishDate",
                        title: "Finish Date"
                    }
                ],
                filterFunction: filterAppointmentsByAnimalNameAndTwoDates
            }
        ]
    }

export default appointmentTemplate