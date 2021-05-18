import { REQUEST_LINK, REQUEST_LINK_SUCCESS, REQUEST_LINK_FAILED  } from './sagaAction';

const initialState = {
    links: [],
    error: false,
    loading: false,
}

export const linksReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_LINK:
            return {
                links: action.payload,
                loading: true,
                error: false,
            };
        case REQUEST_LINK_SUCCESS:
            return {
                links: action.payload,
                loading: false,
                error: false,
            }
        case REQUEST_LINK_FAILED:
            return {
                links:[],
                loading: false,
                error: true
            };
        default:
            return state;
    }
}