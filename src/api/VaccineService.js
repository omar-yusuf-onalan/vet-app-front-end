import axios from "axios";

export const getVaccines = async () => {
    const { data } = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + `vaccines`
    );

    return data;
};

export const deleteVaccine = async (id) => {
    const { data } = await axios.delete(
        import.meta.env.VITE_APP_BASE_URL + `vaccines/` + id
    );

    return data;
};

export const createVaccine = async (vaccine) => {
    const { data } = await axios.post(
        import.meta.env.VITE_APP_BASE_URL + `vaccines`,
        vaccine
    );

    return data;
};

export const updateVaccine = async (vaccine) => {
    const { data } = await axios.put(
        import.meta.env.VITE_APP_BASE_URL + `vaccines`,
        vaccine
    );

    return data;
};

export const filterVaccinesByAnimalName = async (animalName) => {
    const { data } = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + `vaccines/filter-by-animal-name/${animalName}`
    );

    return data;
};

export const filterVaccinesByTwoDates = async (startDate, finishDate) => {
    const { data } = await axios.get(
        import.meta.env.VITE_APP_BASE_URL + `vaccines/dates?start-date=${startDate}&finish-date=${finishDate}`
    );

    return data;
};