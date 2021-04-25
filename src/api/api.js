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
        return fetch('http://aficionadoleague.ru/api/document/'+id, requestOptions)
    },
    confirmDocument(email, rememberMe, id){
        let myHeaders = new Headers();
        let formdata = new FormData();
        formdata.append("confirmed", rememberMe);
        formdata.append("email", email);

        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
      return fetch('http://aficionadoleague.ru/api/document/'+ id+"/", requestOptions)
    }
}