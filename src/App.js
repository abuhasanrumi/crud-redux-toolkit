import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import ShowUsers from './pages/ShowUsers';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-users" element={<ShowUsers />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
