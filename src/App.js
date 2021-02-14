import logo from './logo.svg';
import './App.css';
import {Route,Switch,Link} from 'react-router-dom';
import PostList from './components/PostList';
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      <h4>Assignment</h4>
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/list" component={PostList}/>
 </Switch>


    </div>
  );
}

export default App;
