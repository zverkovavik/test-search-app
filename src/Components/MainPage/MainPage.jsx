import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Loader } from '../Loader/Loader';
import { UserCard } from '../UserCard/UserCard';
import { searchUsers } from '../../api/api.js';
import './MainPage.css';

export function MainPage() {
    const [searchRequest, setSearchRequest] = useState('');
    const [searchResult, serSearchResult] = useState([]);
    const [isUploaded, setIsUploaded] = useState(true);

    useEffect(() => {
        if (searchRequest) {
            setIsUploaded(false);
            searchUsers(searchRequest).then((response) => {
                responseHandler(response);
            });
        }
    }, [searchRequest]);

    const responseHandler = (response) => {
        serSearchResult(response.data.items);
        setIsUploaded(true);


    };
    const handleInputChange = (event) => {
        setSearchRequest(event.target.value);
    };

    return (
        <>
            <header className="header">
                <Navigation />
            </header>
            <main>
                <article className="search">
                    <input
                        type="text"
                        defaultValue={searchRequest}
                        onChange={handleInputChange}
                        className="search__input"
                        placeholder='Please type user name here...'
                    />
                </article>
                {isUploaded ? <section className="user-cards">
                    {!!searchResult.length && searchResult.map((userInfo) => {
                        return <UserCard
                            key={userInfo.id}
                            userInfo={userInfo}
                        />
                    })}
                </section>
                    : <Loader />}
            </main>
        </>
    );
};