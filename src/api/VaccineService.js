import $ from 'jquery';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getVaccines = async () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}vaccines`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const deleteVaccine = async (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}vaccines/${id}`,
            type: 'DELETE',
            success: resolve,
            error: reject
        });
    });
};

export const createVaccine = async (vaccine) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}vaccines`,
            type: 'POST',
            data: JSON.stringify(vaccine),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const updateVaccine = async (vaccine) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}vaccines/${vaccine.id}`,
            type: 'PUT',
            data: JSON.stringify(vaccine),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const filterVaccinesByAnimalName = async (animalName) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}vaccines/filter-by-animal-name/${animalName}`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const filterVaccinesByTwoDates = async (startDate, finishDate) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}vaccines/dates`,
            type: 'GET',
            data: {
                'start-date': startDate,
                'finish-date': finishDate
            },
            success: resolve,
            error: reject
        });
    });
};
