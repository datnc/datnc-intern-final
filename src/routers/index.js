import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NewsTitle from '../components/Main/NewsTitle';
import LayoutAdmin from '../pages/layout/Main/LayoutAdmin';
import LayoutPrincipal from '../pages/layout/Main/LayoutPrincipal';
import LayoutTeacher from '../pages/layout/Main/LayoutTeacher';
import LayoutStudent from '../pages/layout/Main/LayoutStudent';
import LayoutGuest from '../pages/layout/Main/LayoutGuest';
import Home from '../pages/views/Main/Home';
import News from '../pages/views/Main/News';
import StudentList from '../pages/views/Main/Teacher/StudentList';
import StudentListTitle from '../components/Main/Teacher/StudentListTitle'
import Login from '../pages/views/Main/Login';
import NewsDetail from '../pages/views/Main/NewsDetail';
import StudentDetail from '../pages/views/Main/Teacher/StudentDetail';
import TeacherInfo from '../pages/views/Main/Teacher/TeacherInfo';
import { browserHistory } from 'react-router'


const Routers = props => {
    var hours = 0.25; // Reset when storage is more than 24hours
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
        localStorage.setItem('setupTime', now)
    } else {
        if (now - setupTime > hours * 60 * 60 * 1000) {
            localStorage.clear()
            localStorage.setItem('setupTime', now);
        }
    }

    if (localStorage.getItem("Token") === null) {
        browserHistory.push("/login");
    }
    return (
        <Router>
            <Switch>
                <Route path={["/", "/guest/home"]} exact>
                    <LayoutGuest>
                        <Route>
                            <Home />
                        </Route>
                    </LayoutGuest>
                </Route>
                <Route path="/login" >
                    <Login />
                </Route>
                <Route path="/admin/:path?/:path?">
                    <LayoutAdmin>
                        <Switch>
                            <Route path="/admin/home">
                                <Home />
                            </Route>
                            <Route path="/admin/news">
                                <NewsTitle />
                                <News />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/principal/:path?/:path?">
                    <LayoutPrincipal>
                        <Switch>
                            <Route path="/principal/home">
                                <Home />
                            </Route>
                            <Route path="/principal/news">
                                <NewsTitle />
                                <News />
                            </Route>
                            <Route path="/principal/news-detail/:id">
                                <NewsTitle />
                                <NewsDetail />
                            </Route>
                        </Switch>
                    </LayoutPrincipal>
                </Route>
                <Route path="/teacher/:path?/:path?/:path?">
                    <LayoutTeacher>
                        <Switch>
                            <Route path="/teacher/home">
                                <Home />
                            </Route>
                            <Route path="/teacher/news">
                                <NewsTitle />
                                <News />
                            </Route>
                            <Route path="/teacher/student-list">
                                <StudentListTitle />
                                <StudentList />
                            </Route>
                            <Route path="/teacher/student-detail/:id">
                                <StudentDetail />
                            </Route>
                            <Route path="/teacher/teacher-info">
                                <TeacherInfo />
                            </Route>
                            <Route path="/teacher/news-detail/:id">
                                <NewsTitle />
                                <NewsDetail />
                            </Route>
                        </Switch>
                    </LayoutTeacher>
                </Route>
                <Route path="/student/:path?/:path?">
                    <LayoutStudent>
                        <Switch>
                            <Route path="/student/home">
                                <Home />
                            </Route>
                            <Route path="/student/news">
                                <NewsTitle />
                                <News />
                            </Route>
                        </Switch>
                    </LayoutStudent>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
