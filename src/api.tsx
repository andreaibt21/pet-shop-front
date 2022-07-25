import axios from "axios";

const API = axios.create({
  baseURL: "https://my-petshop-app.herokuapp.com/",
});

export const getProducts = async () => {
  const { data } = await API.get(`/products`);
  return data;
};

export const getProductsById = async (id: string) => {
  const { data } = await API.get(`/products/${id}`);
  return data;
};

export const createNewUser = async (user: any) => {
  try {
    const { data } = await API.post("auth/register", user);
    console.log(user, data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const checkUser = async (user: any) => {
  try {
    const { data } = await API.post(`auth/login`, user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addToBasket = async (email: string, item: any) => {
  const { data } = await API.post(`/users/${email}`, item);
  return data;
};
