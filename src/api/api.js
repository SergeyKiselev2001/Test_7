import axios from "axios";

const instance = axios.create({
    baseURL: 'http://hh.autodrive-agency.ru'
});


export const sendValues = async (body) => {
  try {
    const result = await instance.post('/test-tasks/front/task-7/', body)
    return result.data
  } catch(e){
    return e.response.data
  }
}