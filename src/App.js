import React, { Component} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter as Router, Route} from 'react-router-dom';
import Movie from './components/home/Movie';

class App extends Component {
  render (){
    return(
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <Route exact path='/movie/:id' component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;

/*
  using HashRouter instead of BrowserRouter because BrowserRouter make some issues when deploy this project in github pages 
*/