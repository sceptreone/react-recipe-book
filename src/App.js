import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './componets/layout/Header';
import About from './componets/pages/About';
import Page404 from './componets/pages/Page404';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
   <Router>
     <div className='App'>
       <Header branding="Recipe Book" />
       <div className="container">
         <Switch>
           <Route exact path="/" />
           <Route exact path="/about" component={About} />
           <Route component={Page404} />
         </Switch>
       </div>
     </div>
   </Router>
  );
}

export default App;
