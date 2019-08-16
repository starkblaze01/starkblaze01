import { GET_SENTIMENT_ANALYZER, GET_AI_CODES, GET_JENERETA } from './constants';
import { fetchRepoData } from '../api/fetchdata';

export const getRepoDetails = () => async (dispatch: any, getState: any) => {
    dispatch(
        fetchRepoData()
    );
    dispatch({
        GET_SENTIMENT_ANALYZER
    });
    dispatch({
        type: GET_AI_CODES,
    });
    dispatch({
        type: GET_JENERETA
    });
}