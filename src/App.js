// import logo from './logo.svg';
import './App.css';
// import Todo from './components/todo';
// import Todo from './redux/Todo';
import { Route, Routes } from 'react-router-dom'
import GetData from './react_django_api/getData';
import PostData from './react_django_api/postData';
import UpdateData from './react_django_api/UpdateData';
// import Navbar from './react_django_api/Nabvbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
        <Routes>
              <Route path="/" element={<GetData />} />
              <Route path="/addItem" element={<PostData />} />
              <Route path="/update/:id" element={<UpdateData />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
