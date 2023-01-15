import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useAuthContext} from './hooks/useAuthContext';

// pages & components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  const {user} = useAuthContext();

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              exact path="/"
              element={user ? <Home /> : <Navigate to='/login' />}
            ></Route>
            <Route
              exact path="/login"
              element={ !user ? <Login /> : <Navigate to='/'/>}
            ></Route>
            <Route
              exact path="/signup"
              element={ !user ? <Signup /> : <Navigate to='/'/>}
            ></Route>
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
