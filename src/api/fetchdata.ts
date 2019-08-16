import { GIT_BASE_URL } from './baseURL';
import { SENTIMENT_ANALYZER, AI_CODES, JENERETA } from './routes';
import axios from 'axios';

export const fetchRepoData = async () => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${SENTIMENT_ANALYZER}`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}