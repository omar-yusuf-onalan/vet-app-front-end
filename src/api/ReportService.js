import $ from 'jquery';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getReports = async () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}reports`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const deleteReport = async (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}reports/${id}`,
            type: 'DELETE',
            success: resolve,
            error: reject
        });
    });
};

export const createReport = async (report) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}reports`,
            type: 'POST',
            data: JSON.stringify(report),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const updateReport = async (report) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}reports/${report.id}`,
            type: 'PUT',
            data: JSON.stringify(report),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};
