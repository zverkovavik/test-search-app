import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/constants.js';

export function Navigation() {
    return (
        <ul className="navigation">
            <li className="navigation__item">
                <Link className="navigation__item__link" to={AppRoute.MAIN_PAGE}>
                    Search
                </Link>
            </li>
            <li className="navigation__item">
                <a className="navigation__item__link" href="https://github.com/">
                    GitHub
                </a>
            </li>
            <li className="navigation__item">
                <Link className="navigation__item__link" to={AppRoute.ABOUT}>
                    About
                </Link>
            </li>
        </ul>
    )
}