import {
    createReport,
    deleteReport,
    getReports,
    updateReport
} from "../api/ReportService.js";
import {getAppointments} from "../api/AppointmentService.js";

const reportTemplate =
    {
        name: "Report",
        path: "/reports",
        inputs: [
            {
                placeholder: "Title",
                type: "text",
                value: "title",
                name: "title",
                title: "Title"
            },
            {
                placeholder: "Diagnosis",
                type: "text",
                value: "diagnosis",
                name: "diagnosis",
                title: "Diagnosis"
            },
            {
                placeholder:"Price",
                type: "number",
                value: "price",
                name: "price",
                title: "Price"
            },
            ],
        entity: {
            title: "",
            diagnosis: "",
            price: 0,
            appointment: {},
        },
        parents: [
            [
                {
                    name: "appointment",
                    option: "appointmentDate",
                    getFunction: getAppointments,
                },
                {
                    id: 0,
                    appointmentDate: ""
                }
            ]
        ],
        children: [],
        getFunction: getReports,
        createFunction: createReport,
        updateFunction: updateReport,
        deleteFunction: deleteReport,
        filters: []
    }

export default reportTemplate