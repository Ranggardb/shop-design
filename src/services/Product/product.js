import instance from '../axios';
import requests from '../request';

async function getProducts() {
  try {
    const response = await instance.get(requests.apiGetProducts);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export { getProducts };
