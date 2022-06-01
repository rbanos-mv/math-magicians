import React from 'react';
import {
  HashRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CalcPage from './pages/CalcPage';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <header>
          <h1>Math Magicians</h1>
          <div className="nav">
            <nav>
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/calculator">
                Calculator
              </Link>
              <Link className="link" to="/quote">
                Quote
              </Link>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CalcPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
