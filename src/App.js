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
import Categorywise from './Page/Home/Categorywise/Categorywise';
import Access from './Page/Access/Access';
import Certification from './Page/Certification/Certification';
import Instructor from './Page/Instructor/Instructor';
import CourseDetails from './Page/CourseDetails/CourseDetails';
import InstructorDetails from './Page/InstructorDetails/InstructorDetails';
import PrivacyPolicy from './Page/PrivacyPolicy/PrivacyPolicy';


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

          <Route path="/privacyPolicy">
            <PrivacyPolicy />
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

          <PrivateRoute path="/courses">
            <Categorywise />
          </PrivateRoute>

          <PrivateRoute path="/instructor">
            <Instructor />
          </PrivateRoute>

          <PrivateRoute path="/access">
            <Access />
          </PrivateRoute>
          
          <PrivateRoute path="/certification">
            <Certification />
          </PrivateRoute>


          
         

          <Route path="/courseDetails/:id">
            <CourseDetails />
          </Route>

          <Route path="/instructorDetails/:id">
            <InstructorDetails />
          </Route>


          

       






        </Switch>

      </Router>
    </AuthProvider>
  );
}

export default App;
