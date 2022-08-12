import React, { useEffect, useState } from 'react';
import { Repository } from '../Repository/Repository';
import './UserCard.css';
import { getUserRepos } from '../../api/api';
import { Loader } from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toast, ToastSetting } from '../../constants/constants.js';

export function UserCard(props) {
    const { userInfo:
        { login, avatar_url, html_url, repos_url },
    } = props;
    const [userRepoData, setUserRepoData] = useState([]);
    const [isDataUploaded, setIsDataUploaded] = useState(false);

    const responseHandler = (response) => {
        if (response.status === 200) {
            response.json().then((result) => {
                const data = result.slice(0, 3);
                setUserRepoData(data);
                setIsDataUploaded(true);
            })
        } else if (response.status === 403) {
            toast.error(Toast.API_RATE_LIMIT_EXCEEDED_ERROR, ToastSetting);
            setIsDataUploaded(true);
        } else {
            toast.error(Toast.LOADING_DATA_ERROR, ToastSetting);
            setIsDataUploaded(true);
        }
    };

    useEffect(() => {
        getUserRepos(repos_url).then((response) => {
            responseHandler(response);
        })
    }, []);

    return (<>
        <ToastContainer />
        <article className='user-card'>
            <a href={html_url} className='user-card__link'>{login}</a>
            <img src={avatar_url} className='user-card__avatar' alt="" />
            {isDataUploaded ?
                <ul className='user-card__list'>
                    {userRepoData.length ? userRepoData.map((repo) => {
                        return <Repository
                            key={repo.id}
                            repo={repo}
                        />
                    }) :
                        <p className='user-card__empty'>
                            This user has no repositories on Github
                        </p>}
                </ul>
                : <Loader />}
        </article>
    </>
    )
}