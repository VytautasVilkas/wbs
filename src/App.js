import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BucketPage from './pages/BucketPage'; // Main page with all sections
import NotFound from './pages/NotFound';    // 404 Page
import './styles.css'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Route for the main BucketPage with hash navigation */}
          <Route exact path="/" component={BucketPage} />

          {/* Fallback for 404 - Not Found */}
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

