import {deleteCustomer, getCustomers, updateCustomer} from "../api/CustomerService.js";

export const customerTemplate = {
    name: "Customer",
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
    parents: [],
    children: [],
    changeHandlerFunction: {},
    getFunction: getCustomers,
    createFunction: {},
    updateFunction: updateCustomer,
    deleteFunction: deleteCustomer

}