import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './componets/layout/Header';
import About from './componets/pages/About';
import Page404 from './componets/pages/Page404';

import Recipes from './componets/recipes/Recipes'
import AddRecipe from './componets/recipes/AddRecipe'

import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Header branding="Recipe Book" />
          <div className="container">
            <AddRecipe />
            <Recipes />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
