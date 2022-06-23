import {GET_QUOTES} from '../actions/actionTypes/index.js'

const initialState = {
    quote: {}
}

export default function rootReducer(state = initialState , action){
    
    switch(action.type){
        case GET_QUOTES:
            return{
                ...state,
                quote: action.payload
            }
        default:
            return state;
    }
}

