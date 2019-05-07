import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard';
import ProjectDetails from './components/projects/projectDetails'
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import CreateProject from './components/projects/createProject';
import AuthRoute from './components/auth/authRoute'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>

          <AuthRoute exact path='/' component={Dashboard}/>
          <AuthRoute path='/project/:id' component={ProjectDetails}/>
          <AuthRoute exact path='/create' component={CreateProject}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
