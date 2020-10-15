import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountService from '../../../../services/AccountService';
import CategoryService from '../../../../services/CategoryService';

export default function AdminNavbar() {

    const logOut = () => {
        AccountService.logOut();
    }

    const [categories, setCategories] = useState([]);

    const retrieveCate = () => {
        CategoryService.getAll()
            .then((response) => {
                const cate = response.data;
                setCategories(cate);
            })
            .catch((e) => {
                console.log(e);
            })
    }
    return (
        <div>
            <div className="navbar-area">
                <div className="mobile-nav">
                    <a href="index.html" className="logo">
                        <img src="assets\images\logo.png" alt="logo" />
                    </a>
                </div>
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav text-left">
                                    <li className="nav-item">
                                        <a href="/admin/home" >Home</a>
                                    </li>
                                    <li className="nav-item">

                                        <a href="/admin/news" onClick={() => localStorage.removeItem("cateid")} className="nav-link dropdown-toggle">News</a>

                                        <ul className="dropdown-menu">
                                            {categories.map(category => (
                                                <li className="nav-item" key={category.id}>
                                                    <a className="nav-link" href={"/admin/news"} onClick={() => localStorage.setItem("cateid", category.id)}>{category.cate_name}</a>
                                                </li>
                                            ))}
                                        </ul>

                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link dropdown-toggle">Management</a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="case.html" className="nav-link">Teacher Management</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="case-details.html" className="nav-link">Student Management</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="case-details.html" className="nav-link">News Management</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="case-details.html" className="nav-link">News Category Management</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <Router>
                                <div className="nav-btn">
                                    <a href="/login" className="box-btn">Log Out</a>
                                </div>
                            </Router>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
