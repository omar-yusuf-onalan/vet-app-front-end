import {createDoctor, deleteDoctor, getDoctors, updateDoctor} from "../api/DoctorService.js";
import {availableDateTemplate} from "./AvailableDateTemplate.js";

const doctorTemplate =
    {
        name: "Doctor",
        path: "/doctors",
        inputs: [
            {
                placeholder: "Name",
                type: "text",
                value: "name",
                name: "name",
                title: "Name"
            },
            {
                placeholder: "Email",
                type: "text",
                value: "email",
                name: "email",
                title: "Email"
            },
            {
                placeholder:"Address",
                type: "text",
                value: "address",
                name: "address",
                title: "Address"
            },
            {
                placeholder: "City",
                type: "text",
                value: "city",
                name: "city",
                title: "City"
            },
            {
                placeholder: "Phone",
                type: "text",
                value: "phone",
                name: "phone",
                title: "Phone"
            }],
        entity: {
            name: "",
            email: "",
            address: "",
            city: "",
            phone: ""
        },
        parents: [],
        children: [
            availableDateTemplate
        ],
        getFunction: getDoctors,
        createFunction: createDoctor,
        updateFunction: updateDoctor,
        deleteFunction: deleteDoctor,
        filters: []
    }

export default doctorTemplate