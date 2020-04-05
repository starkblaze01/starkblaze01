import { GIT_BASE_URL } from './baseURL';
import { SENTIMENT_ANALYZER, AI_CODES, JENERETA } from './routes';
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_OAUTH_TOKEN;

export const fetchSentimentRepoData = async () => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${SENTIMENT_ANALYZER}`,
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
    console.log(process.env.REACT_APP_OAUTH_TOKEN)
}

export const fetchJeneretaRepoData = async () => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${JENERETA}`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}

export const fetchAIRepoData = async () => {
    try {
        const res = await axios.get(
            `${GIT_BASE_URL}${AI_CODES}`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err);
    }
}
