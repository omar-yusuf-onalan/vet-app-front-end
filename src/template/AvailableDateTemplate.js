import {getDoctors} from "../api/DoctorService.js";
import {
    createAvailableDate,
    deleteAvailableDate,
    getAvailableDates,
    updateAvailableDate
} from "../api/AvailableDateService.js";

export const availableDateTemplate = {
    name: "Available Date",
    path: "/availableDates",
    inputs: [
        {
            placeholder: "Available Date",
            type: "date",
            value: "availableDate",
            name: "availableDate",
            title: "Available Date"
        },
    ],
    entity: {
        availableDate: "",
        doctor: {}
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
        ]

    ],
    children: [],
    getFunction: getAvailableDates,
    createFunction: createAvailableDate,
    updateFunction: updateAvailableDate,
    deleteFunction: deleteAvailableDate,
    filters: []
}