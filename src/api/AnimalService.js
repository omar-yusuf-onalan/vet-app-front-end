import $ from 'jquery';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getAnimals = async () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}animals`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const deleteAnimal = async (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}animals/${id}`,
            type: 'DELETE',
            success: resolve,
            error: reject
        });
    });
};

export const createAnimal = async (animal) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}animals`,
            type: 'POST',
            data: JSON.stringify(animal),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const updateAnimal = async (animal) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}animals/${animal.id}`,
            type: 'PUT',
            data: JSON.stringify(animal),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const filterAnimalsByName = async (name) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}animals/filter-by-name/${name}`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const filterAnimalsByCustomerName = async (customerName) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}animals/filter-by-customer-name/${customerName}`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};
