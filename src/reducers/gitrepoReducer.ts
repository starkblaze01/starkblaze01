import { GET_AI_CODES, GET_JENERETA, GET_SENTIMENT_ANALYZER } from '../actions/constants';
const defaultState: any = {
    name: "",
    stargazers_count: '',
    language: '',
    homepage: '',
    other: '',
}

export default function (state: any = defaultState, action: any) {
    switch (action.type) {
        case GET_AI_CODES: {
            return {
                ...state,
                other: action.data,
            }
        }
        case GET_JENERETA: {
            return {
                ...state,

            }
        }
        case GET_SENTIMENT_ANALYZER: {
            return {
                ...state,

            }
        }
        default: {
            return state;
        }
    }
}