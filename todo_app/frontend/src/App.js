import React, { Component } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import UserList from "./components/User";
import MenuList from "./components/Menu";
import Footer from "./components/Footer";
import ProjectList from "./components/Project";
import ToDoList from "./components/ToDo";
import {HashRouter, BrowserRouter, Switch, Redirect, Route} from "react-router-dom"; // именно Route (не Router)
import PageNotFound404 from "./components/PageNotFound404";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'users': [],
      'projects': [],
      'todos': [],
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
        this.setState(
          {
            'users': response.data.results
          }
        )
      }
    ).catch(
        error => console.log(error)
    )

    axios.get('http://127.0.0.1:8000/api/projects/').then(response => {
        this.setState(
          {
            'projects': response.data.results
          }
        )
      }
    ).catch(
        error => console.log(error)
    )

    axios.get('http://127.0.0.1:8000/api/todos/').then(response => {
        this.setState(
          {
            'todos': response.data.results
          }
        )
      }
    ).catch(
        error => console.log(error)
    )
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <MenuList />

        <Switch>
            <Route exact path='/' component={() => <UserList users={this.state.users}/>} />
            <Redirect from='/users' to='/' />
            <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects}/>} />
            <Route exact path='/todos' component={() => <ToDoList todos={this.state.todos}/>} />


            <Route component={PageNotFound404} />
        </Switch>

        <Footer />
        </BrowserRouter>
     </div>
    );
  }
}

export default App;
