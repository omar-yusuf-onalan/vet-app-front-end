import $ from 'jquery';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getAppointments = async () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}appointments`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const deleteAppointment = async (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}appointments/${id}`,
            type: 'DELETE',
            success: resolve,
            error: reject
        });
    });
};

export const createAppointment = async (appointment) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}appointments`,
            type: 'POST',
            data: JSON.stringify(appointment),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const updateAppointment = async (appointment) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}appointments/${appointment.id}`,
            type: 'PUT',
            data: JSON.stringify(appointment),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const filterAppointmentsByDoctorNameAndTwoDates = async (doctorName, startDate, finishDate) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}appointments/filter-by-doctor-name-and-two-dates/${doctorName}/${startDate}/${finishDate}`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const filterAppointmentsByAnimalNameAndTwoDates = async (animalName, startDate, finishDate) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}appointments/filter-by-animal-name-and-two-dates/${animalName}/${startDate}/${finishDate}`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};
