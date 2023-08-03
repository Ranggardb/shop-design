import requests from '../request';
import instance from '../axios';

async function getMasterProduct(start = 0, length = 25) {
  try {
    const response = await instance.get(
      `${requests.apiGetMasterProduct}?start=${start}&length=${length}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export { getMasterProduct };
