import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/',
});

export const DocumentAPI = {
    getDocument(id){
        let myHeaders = new Headers();
        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };
        return fetch('http://localhost:8000/api/document/'+id, requestOptions)
    },
    confirmDocument(){
        let requestOptions = {
            method: 'POST',
            headers: '',
            redirect: 'follow',
        };
      return fetch('http://localhost:8000/api/document/id', requestOptions)
    }
}