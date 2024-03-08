import {
    createCustomer,
    deleteCustomer,
    filterCustomersByName,
    getCustomers,
    updateCustomer
} from "../api/CustomerService.js";

const customerTemplate =
{
    name: "Customer",
    path: "/customers",
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
    children: [],
    getFunction: getCustomers,
    createFunction: createCustomer,
    updateFunction: updateCustomer,
    deleteFunction: deleteCustomer,
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
            filterFunction: filterCustomersByName
        }
    ]
}

export default customerTemplate