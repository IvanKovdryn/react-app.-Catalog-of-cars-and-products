import axios from "axios";

export const CarService = {
  async getById(id) {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  },
  async getProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  },
  async createProd(data) {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      data
    );
    return response.data;
  },
};
