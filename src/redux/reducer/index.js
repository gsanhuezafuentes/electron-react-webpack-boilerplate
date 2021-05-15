import { combineReducers } from 'redux'

const initialState = {

}

function empty(state = initialState, { type, payload }){
    switch (type) {

    //case typeName:
    //    return { ...state, ...payload }

    default:
        return state
    }
}


const reducers = {empty}

export default combineReducers(reducers)