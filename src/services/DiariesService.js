import axios from 'axios'

export default class DiariesService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }
    getAll() {
        return axios.get('diaries')
    }
    get(id) {
        return axios.get(`diaries/${id}`)
    }

    diaryAdd( diary ) {
        return axios.post('diaries', diary);
    }
    diaryCommentAdd(id, comment) {
        return axios.post(`diaries/${id}/comments`, comment);
    }
    diaryStudentAdd(id, student) {
        return axios.post(`diaries/${id}/students`, student);
    }
    diaryEdit(id, newDiary) {
        return axios.put(`diaries/${id}`, newDiary);
    }
    delete(id) {
        return axios.delete(`diaries/${id}`)
    }
}

export const diariesService = new DiariesService();