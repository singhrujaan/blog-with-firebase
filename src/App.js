import './App.css';
import { useEffect, useState } from 'react';
import {BrowserRouter as Router ,Routes,Route,Link} from "react-router-dom"
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import {signOut} from 'firebase/auth';
import { auth } from './firebase.config';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  useEffect(()=>{
console.log("first",isAuth)
  },[])
  const handleSignOut =()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname='/'
    })
  }
  return (
    <div className='bg-orange-100'>
    <Router>
      <nav className='bg-orange-700 shadow-md shadow-slate-500/80  h-20 items-center text-xl font-semibold space-x-36 flex justify-center '>
        <Link to='/' className='hover:text-white'>Home</Link>
        
        {!isAuth ? 
        (<><Link to='/login' className='hover:text-white'>Login</Link></>)
        :
        <><Link to='/createpost' className='hover:text-white'>Create Post</Link><button className='hover:text-white' onClick={handleSignOut}>sign out</button> </>}
      </nav>
      <Routes>
        <Route path="/" element ={<Home isAuth={isAuth}/>}/>
        <Route path="/createpost" element ={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/login" element ={<Login  setIsAuth={setIsAuth} isAuth={isAuth}/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
