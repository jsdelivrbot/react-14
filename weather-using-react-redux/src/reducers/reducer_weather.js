import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type){
    case FETCH_WEATHER:    
    return [ action.payload.data, ...state ]; // Produced following Array: [city, city, city]
    }
    return state;
}