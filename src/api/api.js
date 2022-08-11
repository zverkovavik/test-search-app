import { octokit } from '../utils/octokit';

export const searchUsers = async (nickname) => {
    return await octokit.request(`GET /search/users?q=${nickname}+in%3Alogin&type=Users&repos?page=3&per_page=10`,)
};
