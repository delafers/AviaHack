import {DocumentAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    documentID: null,
    IsScanned: false,
    link:null
};

const docReducer = (state = initialState, action) => {
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

export const setDocData = (id, IsScanned,link) => ({type: SET_USER_DATA, payload:{id, IsScanned, link}})


export const GetPDF = (id) => (dispatch) => {
    DocumentAPI.getDocument(id)
        .then(response =>
            response.text())
        .then(result => {
            debugger
            let accessDoc = JSON.parse(result)
            let link = accessDoc.document
            dispatch(setDocData(id, true, link))
            }

        )
}
export default docReducer