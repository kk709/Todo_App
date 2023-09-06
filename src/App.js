// import logo from './logo.svg';
import './App.css';
// import Todo from './components/todo';
// import Todo from './redux/Todo';
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import GetData from './react_django_api/getData';
import PostData from './react_django_api/postData';
import UpdateData from './react_django_api/UpdateData';
import UserProfile from './react_django_api/UserProfile';
import Navbar from './react_django_api/Navbar';
import Login from './react_django_api/Login';
import Register from './react_django_api/Register';
import Logout from './react_django_api/Logout';
import Profile from './react_django_api/LoginUserProfile';
// import Navbar from './react_django_api/Nabvbar';

const PrivateRoute = () => {

  const isAuthenticated = localStorage.getItem('jwt');
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}

function App() {
  //const [authenticated, setAuthenticated] 

  return (
    <>
      <div className="App">
        <Navbar />
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/@" element={<Register />} />
            <Route element={<PrivateRoute />}>
              <Route path="/detail" element={<GetData />} />
              <Route path="/addItem" element={<PostData />} />
              <Route path="/update/:id" element={<UpdateData />} />
              <Route path="/profile/:id" element={<UserProfile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;