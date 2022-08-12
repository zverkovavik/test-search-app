import React from 'react';
import { Navigation } from '../Navigation/Navigation';

export function About() {
    return (
        <>
            <header className="header">
                <Navigation />
            </header>
            <main>
                <section className='description'>
                    <h1 className='description__title'>About</h1>
                    <p className='description__details'>
                        This application is for searching users and their repositories on Github by using Search Github API. <br />
                        Using the app is very easy. <br />
                        You should go to the main page, you can do it by clicking on Search button at the top of the page and write more than 3 letters of Github user name. <br />
                        Try :)
                    </p>
                </section>
            </main>
        </>
    );
};