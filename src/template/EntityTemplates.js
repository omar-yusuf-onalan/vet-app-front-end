import {getCustomers} from "../api/CustomerService.js";

export const customerTemplate = {
    name: "Customer",
    inputs: [
        {
            placeholder: "Name",
            type: "text",
            value: "name",
            title: "Name"
        },
        {
            placeholder: "Email",
            type: "text",
            value: "email",
            title: "Email"
        },
        {
            placeholder:"Address",
            type: "text",
            value: "address",
            title: "Address"
        },
        {
            placeholder: "City",
            type: "text",
            value: "city",
            title: "City"
        },
        {
            placeholder: "Phone",
            type: "text",
            value: "phone",
            title: "Phone"
        }],
    parents: [],
    children: [],
    changeHandlerFunction: {},
    getFunction: getCustomers,
    createHandlerFunction: {},
    updateHandlerFunction: {},
    deleteHandlerFunction: {}

}