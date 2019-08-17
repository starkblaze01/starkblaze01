import { GET_AI_CODES, GET_JENERETA, GET_SENTIMENT_ANALYZER } from '../actions/constants';
const defaultState: any = {
    sentiment: '',
    ai: '',
    jenereta: '',
}

export default function (state: any = defaultState, action: any) {
    switch (action.type) {
        case GET_AI_CODES: {
            return {
                ...state,
                ai: action.data,
            }
        }
        case GET_JENERETA: {
            return {
                ...state,
                jenereta: action.data,
            }
        }
        case GET_SENTIMENT_ANALYZER: {
            return {
                ...state,
                sentiment: action.data,
            }
        }
        default: {
            return state;
        }
    }
}