import { octokit } from '../utils/octokit';

export const searchUsers = async (nickname, page = 1) => {
    return await octokit.request(`GET /search/users?q=${nickname}+in%3Alogin&type=Users&repos?page=${page}&per_page=9`)
};

export const getUserRepos = async (url) => {
    return await fetch(url);
}