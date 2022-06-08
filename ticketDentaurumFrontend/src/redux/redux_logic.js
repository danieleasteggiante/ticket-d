import { createStore, combineReducers, applyMiddleware } from 'redux'; //Added combineReducers, apply Middleware

import thunk from 'redux-thunk'; //convert action to state=>props
import logger from 'redux-logger'; //logging state

import { BASE_URL } from '../assets/shared/baseUrl';

const axios = require('axios');
// Create Actions
var sha256 = require('js-sha256');

const sincset = (el) => {
    var x = Math.random();
    var substrX = x.toString().substr(2, 5);
    return substrX + el + (substrX + 2503)
}

export function CreateUser(idUtente, password, set = false) {

    return function(dispatch) {
        return axios.get(BASE_URL + "/api/users?CodCliente=" + idUtente + "&password=" + sha256(password))
            .then(({ data }) => {
                if (data) {
                    localStorage.setItem('mytoken', data.tokenInfo);
                    localStorage.setItem('sincset', sincset(idUtente));

                    axios.defaults.headers.common['authorization'] = 'Bearer ' + localStorage.getItem('mytoken');
                    axios.defaults.headers.common['sincset'] = localStorage.getItem('sincset');

                    dispatch({ type: "CREATE_USER", payload: data });
                } else {
                    alert("error");
                }
            }).catch(e => {
                alert("Nome utente o password sbagliata")
            });
    };
}

export function FetchAdminList() {
    return async function() {
        var list = await axios.get(BASE_URL + "/api/users/Admin");
        return list;
    };
}

export function FetchTicketsAction(CodCliente) {
    return function(dispatch) {
        return axios.get(BASE_URL + "/api/tickets?CodCliente=" + CodCliente)
            .then(({ data }) => {
                dispatch({ type: "TICKETS", payload: data });
            });
    };
}

export function FetchAllTicketsAction(area) {
    return function(dispatch) {
        return axios.get(BASE_URL + "/api/tickets/All", )
            .then(({ data }) => {
                dispatch({ type: "ALL_TICKETS", payload: data });
            });
    };
}

export function CreateNewTicket(ticket) {
    return function(dispatch) {
        return axios({
                method: "POST",
                url: BASE_URL + "/api/tickets",
                data: ticket,
            })
            .then(res => {
                console.log("res", res.data);
                dispatch({ type: "CREATE_TICKET", payload: res.data });
                return res.data._id;
            })
            .catch(err => {
                console.log("error in request", err);
            })
    };
}


export function CreateNewTicketImages(data, ticketID) {
    return function(dispatch) {
        return axios.post(BASE_URL + "/api/upload/" + ticketID, data, {
            onUploadProgress: (progressEvent) => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log("onUploadProgress", totalLength);
                    if (totalLength !== null) {
                        var percent = (Math.round((progressEvent.loaded * 100) / totalLength));
                        dispatch({ type: "UPLOAD_IMAGE_TICKET", payload: percent });
                        if (percent === 100) {
                            setTimeout(() => {
                                percent = null;
                                dispatch({ type: "UPLOAD_IMAGE_TICKET", payload: percent });
                            }, 1000);
                        }
                    }
                }
                // receive two    parameter endpoint url ,form data
        }).then(res => { // then print response status
            console.log(res.statusText)
            dispatch({ type: "ADDED_IMAGE_TICKET", payload: res.data });
        })

    };
}

export function AddSingleImages(data, ticketID) {
    console.log(ticketID);
    return function(dispatch) {
        return axios.post(BASE_URL + "/api/upload/" + ticketID + "/single", data, {
            onUploadProgress: (progressEvent) => {
                    const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
                    console.log("onUploadProgress", totalLength);
                    if (totalLength !== null) {
                        var percent = (Math.round((progressEvent.loaded * 100) / totalLength));
                        dispatch({ type: "UPLOAD_IMAGE_TICKET", payload: percent });
                        if (percent === 100) {
                            setTimeout(() => {
                                percent = null;
                                dispatch({ type: "UPLOAD_IMAGE_TICKET", payload: percent });
                            }, 1000);
                        }
                    }
                }
                // receive two parameter endpoint url ,form data
        }).then(res => { // then print response status
            console.log(res.statusText)
            dispatch({ type: "ADDED_SINGLE_IMAGE_TICKET", payload: res.data });
        })

    };
}

export function AddAdmin(admin, ticketID) {
    return function(dispatch) {
        return axios({
                method: "POST",
                url: BASE_URL + "/api/tickets/message/" + ticketID + "/Admin",

                data: admin,
            })
            .then(res => {
                console.log("res", res.data);
                dispatch({ type: "ADD_ADMIN", payload: res.data });
            })
            .catch(err => {
                console.log("error in request", err);
            });
    };
}

export function AddReply(reply, ticketID) {
    return function(dispatch) {
        return axios({
                method: "POST",
                url: BASE_URL + "/api/tickets/message/" + ticketID,

                data: reply,
            })
            .then(res => {
                console.log("res", res.data);
                dispatch({ type: "ADD_REPLY", payload: res.data });
            })
            .catch(err => {
                console.log("error in request", err);
            });
    };
}

export function ReopenTicket(ticketID) {
    return function(dispatch) {
        return axios({
                method: "POST",
                url: BASE_URL + "/api/tickets/message/" + ticketID + "/reopen",
            })
            .then(res => {
                console.log("res", res.data);
                dispatch({ type: "REOPEN_TICKET", payload: res.data });
            })
            .catch(err => {
                console.log("error in request", err);
            });
    };
}

export function SendMail(mail_body) {
    return function(dispatch) {
        return axios({
                method: "POST",
                url: BASE_URL + "/api/users/sendMail",
                data: mail_body
            })
            .catch(err => {
                console.log("error in request", err);
            });
    };
}


//Create Reducer
const CreateUserReducer = (state = {
    stateApp: 'default',
    content: [],
    token: null
}, action) => {
    switch (action.type) {
        case 'CREATE_USER':
            return {...state, stateApp: action.payload.userInfo[0].userType, content: action.payload.userInfo[0], token: action.payload.tokenInfo };
        default:
            return state;
    }
}

const FetchTicketsReducer = (state = {
    tickets: []
}, action) => {
    switch (action.type) {
        case 'TICKETS':
            return {...state, tickets: action.payload };
        case 'ALL_TICKETS':
            return {...state, tickets: action.payload };
        default:
            return state;
    }
}

const CreateTicketReducer = (state = {
    ticket: [],
    upload: null
}, action) => {
    switch (action.type) {
        case 'CREATE_TICKET':
            return {...state, ticket: action.payload };
        case 'ADD_MESSAGE':
            return {...state, ticket: action.payload };
        case 'ADD_ADMIN':
            return {...state, ticket: action.payload };
        case 'ADDED_IMAGE_TICKET':
            return {...state, ticket: action.payload };
        case 'UPLOAD_IMAGE_TICKET':
            return {...state, upload: action.payload };
        case 'ADDED_SINGLE_IMAGE_TICKET':
            return {...state, ticket: action.payload };
        case 'ADD_REPLY':
            return {...state, ticket: action.payload };
        case 'REOPEN_TICKET':
            return {...state, ticket: action.payload };
        default:
            return state;
    }
}

//Create Store
const persistedState = localStorage.getItem('reduxState') ?
    JSON.parse(localStorage.getItem('reduxState')) : {} //persisted State

const rootReducer = combineReducers({
    CreateUserReducer,
    FetchTicketsReducer,
    CreateTicketReducer
})

export const store = createStore(rootReducer, {}, applyMiddleware(thunk, logger));