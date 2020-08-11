import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return (
        <HashRouter>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/study" component={TeacherList}></Route>
            <Route path="/give-classes" component={TeacherForm}></Route>
        </HashRouter>
    )
}

export default Routes;