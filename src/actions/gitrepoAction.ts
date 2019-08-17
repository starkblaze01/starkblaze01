import { GET_SENTIMENT_ANALYZER, GET_AI_CODES, GET_JENERETA } from './constants';
import { fetchSentimentRepoData, fetchAIRepoData, fetchJeneretaRepoData } from '../api/fetchdata';

export const getSentimentRepoDetails = () => async (dispatch: any, getState: any) => {
    const res = await fetchSentimentRepoData();
    dispatch({
        type: GET_SENTIMENT_ANALYZER,
        data: res,
    });
}

export const getAIRepodetails = () => async (dispatch: any) => {
    const res = await fetchAIRepoData();
    dispatch({
        type: GET_AI_CODES,
        data: res,
    });
}

export const getJeneretaRepoDetails = () => async (dispatch: any) => {
    const res = await fetchJeneretaRepoData();
    dispatch({
        type: GET_JENERETA,
        data: res,
    });
}