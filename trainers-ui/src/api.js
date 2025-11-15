import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

const getAuthHeader = () => {
  const token = localStorage.getItem("access");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const loginUser = async (username, password) => {
  const response = await axios.post(`${BASE_URL}token/`, {
    username,
    password,
  });
  return response.data;
};

export const getTrainers = async (filters = {}) => {
  const params = new URLSearchParams(filters).toString();
  const response = await axios.get(`${BASE_URL}trainers/?${params}`, {
    headers: getAuthHeader(),
  });
  return response.data;
};

export const addTrainer = async (trainersData) => {
  const response = await axios.post(`${BASE_URL}trainers/`, trainersData, {
    headers: getAuthHeader(),
  });
  return response.data;
};

export const updateTrainer = async (id, trainerData) => {
  const response = await axios.put(`${BASE_URL}trainers/${id}/`, trainerData, {
    headers: getAuthHeader(),
  });
  return response.data;
};

export const deleteTrainer = async (id) => {
  const response = await axios.delete(`${BASE_URL}trainers/${id}/`, {
    headers: getAuthHeader(),
  });
  return response.data;
};