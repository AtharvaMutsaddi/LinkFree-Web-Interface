import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const fetchTemplates = async () => {
  try {
    const response = await instance.get("/templates");
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const getReadMe= async (encodedName) => {
  try {
    const response = await instance.get(`/template/${encodedName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
export const downloadTemplate= async (encodedName) => {
  try {
    const response = await instance.get(`/download/${encodedName}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}