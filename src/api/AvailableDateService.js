import $ from 'jquery';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getAvailableDates = async () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}availableDates`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const deleteAvailableDate = async (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}availableDates/${id}`,
            type: 'DELETE',
            success: resolve,
            error: reject
        });
    });
};

export const createAvailableDate = async (availableDate) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}availableDates`,
            type: 'POST',
            data: JSON.stringify(availableDate),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const updateAvailableDate = async (availableDate) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}availableDates/${availableDate.id}`,
            type: 'PUT',
            data: JSON.stringify(availableDate),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};
