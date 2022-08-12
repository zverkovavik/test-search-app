import React from 'react';
import './Repository.css';

export function Repository(props) {
    const { name, html_url, description, language, watchers_count, forks_count } = props.repo;

    return (
        <li className='repo'>
            <a href={html_url} className='repo__link'>
                <h3 className='repo__title'>{name}</h3>
                <p className='repo__description'>{description}</p>
                <div className='container'>
                    <p className='repo__info'>Language: <span className='data'>{language}</span>
                    </p>
                    <p className='repo__info'>Forks: <span className='data'>{forks_count}</span>
                    </p>
                    <p className='repo__info'>Watchers: <span className='data'>{watchers_count}</span>
                    </p>
                </div>
            </a>
        </li>
    );
};