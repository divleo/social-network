import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Dialogs from './components/Dialogs';
import Profile from './components/Profile';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/profile" render={() => <Profile />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
