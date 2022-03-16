import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "../src/components/todo.module.css";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Login } from "./pages/Login";
import { useSelector } from "react-redux";
import {useEffect} from "react"

function App() {

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const navigator = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if(isUserLoggedIn){
      if(pathname === "/login") navigator("/");
      else navigator(pathname);
    }
    else{
      navigator("/login")
    }
  }, [navigator, isUserLoggedIn, pathname])
  
  return (
    <div className={styles.App}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
