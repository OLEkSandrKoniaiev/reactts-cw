import axios from "axios";
import {baseURL} from "../constants/urls";

const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2JlZDdhMDE4NmM4MDJlMmZlNjRkNzg2MjZmNjllZSIsInN1YiI6IjY2NzU0OTcwOGM2MDJkNzM3YzRlZTBlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qcs88CDgUVae3Wi9UVc26f6ZqIGvPntz2qNPUQTWPK0';

const apiService = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`
    }
});

export {
    apiService
}