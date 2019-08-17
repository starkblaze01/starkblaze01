import { GIT_BASE_URL } from './baseURL';
import { SENTIMENT_ANALYZER, AI_CODES, JENERETA } from './routes';
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = '419b11aca013fd2747e1a360d43b5cb98807e4f0';

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
