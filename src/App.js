import './App.css';
import Homepage from './Pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import User from './Pages/User';
import RequiredAuth from './Components/RequiredAuth';
import Admin from './Pages/Admin';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route
          path="/admin"
          element={
            <RequiredAuth>
              <Admin />
            </RequiredAuth>
          }
        />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
