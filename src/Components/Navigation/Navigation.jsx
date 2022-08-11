import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <ul className="navigation">
            <li className="navigation__item">
                <Link className="navigation__item__link" to={'/'}>
                    Test Task
                </Link>
            </li>
            <li className="navigation__item">
                <a className="navigation__item__link" href="https://github.com/">
                    GitHub
                </a>
            </li>
            <li className="navigation__item">
                <Link className="navigation__item__link" to={'/about'}>
                    About
                </Link>
            </li>
        </ul>
    )
}