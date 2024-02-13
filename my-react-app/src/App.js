import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './portfolio/about.html';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} /> {/* Add route for About page */}
          {/* Add routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
