import {
    GET_SENTIMENT_ANALYZER, GET_AI_CODES, GET_JENERETA, ENABLE_AI_LOADING,
    ENABLE_JENERETA_LOADING, ENABLE_SENTIMENT_LOADING, DISABLE_AI_LOADING, DISABLE_JENERETA_LOADING,
    DISABLE_SENTIMENT_LOADING, GET_ALL_REPOS, ENABLE_ALL_REPOS_LOADING, DISABLE_ALL_REPOS_LOADING
} from './constants';
import { fetchSentimentRepoData, fetchAIRepoData, fetchJeneretaRepoData, fetchAllRepos } from '../api/fetchdata';

export const getSentimentRepoDetails = () => async (dispatch: any, getState: any) => {
    const res = await fetchSentimentRepoData();
    dispatch({
        type: ENABLE_SENTIMENT_LOADING,
    });
    dispatch({
        type: GET_SENTIMENT_ANALYZER,
        data: res,
    });
    dispatch({
        type: DISABLE_SENTIMENT_LOADING,
    })
}

export const getAIRepodetails = () => async (dispatch: any) => {
    const res = await fetchAIRepoData();
    dispatch({
        type: ENABLE_AI_LOADING,
    });
    dispatch({
        type: GET_AI_CODES,
        data: res,
    });
    dispatch({
        type: DISABLE_AI_LOADING,
    });
}

export const getJeneretaRepoDetails = () => async (dispatch: any) => {
    const res = await fetchJeneretaRepoData();
    dispatch({
        type: ENABLE_JENERETA_LOADING,
    });
    dispatch({
        type: GET_JENERETA,
        data: res,
    });
    dispatch({
        type: DISABLE_JENERETA_LOADING,
    });
}

export const getAllRepoDetails = () => async (dispatch:any) => {
    const res = await fetchAllRepos();
    dispatch({
        type: ENABLE_ALL_REPOS_LOADING
    });
    dispatch({
        type: GET_ALL_REPOS,
        data: res,
    });
    dispatch({
        type: DISABLE_ALL_REPOS_LOADING,
    });
}