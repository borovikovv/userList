import {
    USERS_REQUESTED, DELETE_USER, ERROR,
    USER_REQUESTED, CLEAR_USER
} from '../constans/constans';

let initialState = {
    users: [],
    user: '',
    loading: true,
    hasError: null
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case USERS_REQUESTED:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case USER_REQUESTED:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case DELETE_USER:
            const user = state.users.find((item) => action.payload === item.id);
            const idx = state.users.findIndex((item) => item.id === user.id);
            const newUsersArray = [
                ...state.users.slice(0, idx),
                ...state.users.slice(idx + 1)
            ];
            return {
                ...state,
                users: newUsersArray
            }
        case ERROR:
            return {
              ...state,
              hasError: true
            };
        case CLEAR_USER:
            return {
                ...state,
                user: ''
            }
        default:
            return state;
    }
};

export default usersReducer;