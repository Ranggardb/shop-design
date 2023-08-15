import instance from '../axios';
import requests from '../request';

const url = 'https://dummyapi.io/data/v1/';
const appId = import.meta.env.VITE_APP_ID;

async function getUserById(id = 1) {
  try {
    const response = await instance.get(
      `${url}${requests.apiGetUserById}${id}`,
      { appId: appId }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export { getUserById };
