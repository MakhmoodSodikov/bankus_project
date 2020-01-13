import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <a className="navbar-brand" href="#">Bankus</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="">Домашняя страница<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="rates">Курс валют</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="reg">Регистрация</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }
}
