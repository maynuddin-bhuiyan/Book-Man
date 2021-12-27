import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login/Login';
import Registration from './Page/Login/Registration/Registration';
import Student from './Page/Student/Student';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Dashboard from './Page/DashboardPart/Dashboard/Dashboard';
import PrivateRoute from './Page/Login/PrivateRoute/PrivateRoute';
import DeatialsOder from './Page/Home/DeatialsOder/DeatialsOder';


function App() {
  return (
    <AuthProvider>
      <Router>

        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>


          <Route path='/detial/:id'>
            <DeatialsOder></DeatialsOder>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/student">
            <Student />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <Route path="/registration">
            <Registration />
          </Route>

        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
