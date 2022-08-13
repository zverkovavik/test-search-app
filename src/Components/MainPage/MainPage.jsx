import React, { useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Loader } from '../Loader/Loader';
import { UserCard } from '../UserCard/UserCard';
import { searchUsers } from '../../api/api.js';
import './MainPage.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Toast, ToastSetting,
    MIN_SEARCH_REQUEST_LENGTH,
    FUNCTION_CALL_TIME_DELAY,
} from '../../constants/constants.js';
import { useDebounce } from '../../hooks/useDebounce.js';

export function MainPage() {
    const [searchRequest, setSearchRequest] = useState('');
    const [searchResult, serSearchResult] = useState([]);
    const [isUploaded, setIsUploaded] = useState(true);
    const [hasRequestSent, setHasRequestSent] = useState(false);

    const searchGithubUsers = () => {
        if (searchRequest && searchRequest.length < MIN_SEARCH_REQUEST_LENGTH) {
            toast.error(Toast.TOO_SHORT_REQUEST_ERROR, ToastSetting);
        }
        if (searchRequest.length >= MIN_SEARCH_REQUEST_LENGTH) {
            setIsUploaded(false);
            searchUsers(searchRequest).then((response) => {
                responseHandler(response);
            });
        }
    };

    useDebounce(searchGithubUsers, FUNCTION_CALL_TIME_DELAY, [searchRequest]);

    const responseHandler = (response) => {
        if (response.status === 200) {
            serSearchResult(response.data.items);
            setHasRequestSent(true);
            setIsUploaded(true);
        } else if (response.status === 403) {
            toast.error(Toast.API_RATE_LIMIT_EXCEEDED_ERROR, ToastSetting);
            setIsUploaded(true);
        } else {
            toast.error(Toast.LOADING_DATA_ERROR, ToastSetting);
        }
    };

    const handleInputChange = (event) => {
        setHasRequestSent(false);
        setSearchRequest(event.target.value);
    };

    const isRequestResultEmpty = () => {
        if (hasRequestSent) return (
            <p className='user-cards__empty'>
                Nothing was found for your request
            </p>);
    }
    return (
        <>
            <header className="header">
                <Navigation />
            </header>
            <main>
                <ToastContainer />
                <article className="search">
                    <input
                        type="text"
                        defaultValue={searchRequest}
                        onChange={handleInputChange}
                        className="search__input"
                        placeholder='Please type user name here...'
                    />
                </article>
                {!isUploaded && <Loader />}
                <section className="user-cards">
                    {!!searchResult.length ? searchResult.map((userInfo) => {
                        return <UserCard
                            key={userInfo.id}
                            userInfo={userInfo}
                        />
                    }) :
                        isRequestResultEmpty()}
                </section>
            </main>
        </>
    );
};