import $ from 'jquery';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const getCustomers = async () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}customers`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};

export const deleteCustomer = async (id) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}customers/${id}`,
            type: 'DELETE',
            success: resolve,
            error: reject
        });
    });
};

export const createCustomer = async (customer) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}customers`,
            type: 'POST',
            data: JSON.stringify(customer),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const updateCustomer = async (customer) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}customers/${customer.id}`,
            type: 'PUT',
            data: JSON.stringify(customer),
            contentType: 'application/json',
            success: resolve,
            error: reject
        });
    });
};

export const filterCustomersByName = async (name) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}customers/filter-by-name/${name}`,
            type: 'GET',
            success: resolve,
            error: reject
        });
    });
};
