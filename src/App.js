import './App.css';
import { Switch, Route } from 'react-router-dom'


import HomePage from './pages/HomePage'
import { MovieDetail } from './pages/MovieDetail';
import Nav from './Nav'


function App() {

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies/:movieID">
          <MovieDetail />
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
