import React from 'react';
import { Repository } from '../Repository/Repository';
import './UserCard.css';

export function UserCard(props) {
    const { userInfo: { login, avatar_url, url } } = props;
    return (
        <article className='user-card'>
            <a href={url} className='user-card__link'>{login}</a>
            <img src={avatar_url} className='user-card__avatar' alt="" />
            <ul>
                {[].map((repo) => {
                    return <Repository
                        key={repo}
                        repo={repo}
                    />
                })}
            </ul>
        </article>
    )
}