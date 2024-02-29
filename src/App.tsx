import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import DashSidebar from './components/DashSidebar';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Regester from './pages/Regester';
import { useState } from 'react';

const App = () => {
let [uservalues,setuser]=useState<boolean>(false)
  return (
    <Router>
{
  uservalues?<div className="flex w-full min-h-screen">
  <DashSidebar />
  <div className="w-full">
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="students" element={<Students />} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
</div>: <Regester setuser={setuser}/>
}
      {/* <div className="flex w-full min-h-screen">
        <DashSidebar />
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div> */}
      {/* <Regester/> */}
      
    </Router>
  );
};

export default App;
