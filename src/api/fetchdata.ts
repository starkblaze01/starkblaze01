import { GIT_BASE_URL, REPOS_BASE_URL, AWS_LAMBDA_FUNCTION_BLOGS_URL } from './baseURL';
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

export const fetchAllRepos = async () => {
    try {
        const res = await axios.get(
            `${REPOS_BASE_URL}?per_page=200`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err)
    }
}

export const fetchAllBlogs = async () => {
    try {
        const res = await axios.get(
            `${AWS_LAMBDA_FUNCTION_BLOGS_URL}`
        );
        return {
            isSuccess: true,
            data: res.data,
        }
    } catch (err) {
        console.log(err)
    }
}