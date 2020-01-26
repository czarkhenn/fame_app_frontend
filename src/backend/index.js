import axios from "axios";

const $axios = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" }
});



// Response Interceptor to handle and log errors
$axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // Handle Error
    return Promise.reject(error);
  }
);

export default {
  $axios,
  fetchResource() {
    return $axios.get(`persons`);
  },
  addPerson(new_person) {
    return $axios.post(`persons`, new_person);
  },
  deletePerson(person_id) {
    return $axios.delete(`persons/${person_id}`);
  },
  updatePerson(person_id, edited_person) {
    return $axios.put(`persons/${person_id}`, edited_person);
  }
}
