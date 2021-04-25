import {DocumentAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
   id:null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id) => ({type: SET_USER_DATA, payload:{id}})


export const login = (email, rememberMe, id) => (dispatch) => {
    debugger
    DocumentAPI.confirmDocument(email, rememberMe, id)
        .then(response => response.text())
        .then(result => {
            let accessDoc = JSON.parse(result)
            let id = accessDoc.id
            dispatch(setAuthUserData(id))})
        debugger

}

export default authReducer