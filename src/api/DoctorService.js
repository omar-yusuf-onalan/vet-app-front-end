import $ from 'jquery';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getDoctors = async () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}doctors`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const deleteDoctor = async (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}doctors/${id}`,
            type: 'DELETE',
            success: resolve,
            error: reject
        });
    });
};

export const createDoctor = async (doctor) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}doctors`,
            type: 'POST',
            data: JSON.stringify(doctor),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const updateDoctor = async (doctor) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}doctors/${doctor.id}`,
            type: 'PUT',
            data: JSON.stringify(doctor),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};
