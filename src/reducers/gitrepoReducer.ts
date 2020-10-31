import {
    GET_AI_CODES, GET_JENERETA, GET_SENTIMENT_ANALYZER, ENABLE_AI_LOADING, ENABLE_JENERETA_LOADING,
    ENABLE_SENTIMENT_LOADING, DISABLE_AI_LOADING, DISABLE_JENERETA_LOADING, DISABLE_SENTIMENT_LOADING,
    GET_ALL_REPOS, ENABLE_ALL_REPOS_LOADING, DISABLE_ALL_REPOS_LOADING
} from '../actions/constants';
const defaultState: any = {
    loadingSentiment: true,
    loadingAI: true,
    loadingJenereta: true,
    sentiment: '',
    ai: '',
    jenereta: '',
    all: '',
    loadingAll: true,
}

export default function (state: any = defaultState, action: any) {
    switch (action.type) {
        case ENABLE_SENTIMENT_LOADING: {
            return {
                ...state,
                loadingSentiment: true,
            }
        }
        case ENABLE_AI_LOADING: {
            return {
                ...state,
                loadingAI: true,
            }
        }
        case ENABLE_JENERETA_LOADING: {
            return {
                ...state,
                loadingJenereta: true,
            }
        }
        case DISABLE_AI_LOADING: {
            return {
                ...state,
                loadingAI: false,
            }
        }
        case DISABLE_JENERETA_LOADING: {
            return {
                ...state,
                loadingJenereta: false,
            }
        }
        case DISABLE_SENTIMENT_LOADING: {
            return {
                ...state,
                loadingSentiment: false,
            }
        }
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
        case GET_ALL_REPOS: {
            return {
                ...state,
                all: action.data,
            }
        }
        case ENABLE_ALL_REPOS_LOADING:
            return {
                ...state,
                loadingAll: true,
            }
        case DISABLE_ALL_REPOS_LOADING: {
            return {
                ...state,
                loadingAll: false,
            }
        }    
        default: {
            return state;
        }
    }
}