import Footer from '../../../../components/Main/Footer'
import Header from '../../../../components/Main/Header'
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'

function Login() {

    const [account, setAccount] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        retrieveAccount();
    }, [username, password]);

    const retrieveAccount = async () => {
        axios.post("http://localhost:8080/login", {
            username,
            password
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                localStorage.setItem("Token", res.data.token);
                localStorage.setItem("Role", res.data.id_role);
                localStorage.setItem("Info Id", res.data.id_infor);
                // localStorage.setItem("Tokennnn", res)
            })
    }



    // const onSaveData = e => {
    //     setUsername(localStorage.getItem("username"))
    //     setPassword(localStorage.getItem("password"))
    // }
    let a = localStorage.getItem("Role")
    console.log(a)
    if (a === "1") {
        return (<Redirect to="/teacher/home" />)
    }



    // let userRole = localStorage.getItem("role")
    // if (isLogin && userRole === "teacher") {
    //     return (<Redirect to="/teacher/home" />)
    // }
    // if (isLogin && userRole === "student") {
    //     return (<Redirect to="/student/home" />)
    // }
    // if (isLogin && userRole === "admin") {
    //     return (<Redirect to="/admin/home" />)
    // }
    // if (isLogin && userRole === "principal") {
    //     return (<Redirect to="/principal/home" />)
    // }


    return (
        <div>
            <Header></Header>
            <section className="signup-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="signup-form">
                                <div className="section-tittle text-center">
                                    <h2>Sign In</h2>
                                </div>
                                <form>
                                    <div className="row">
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <input className="form-control" type="text" name="username" placeholder="User Name" onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <input className="form-control" type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                    </div>
                                    <div className="col-12 text-center">
                                        <button className="box-btn signup-btn">
                                            Sign In
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Login
