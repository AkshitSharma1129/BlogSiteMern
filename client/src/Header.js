import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "./UserContext";
import Particles from './Particle';
import { loadFull } from "tsparticles";
// import {UserContext} from "./UserContext";
export default function Header(){
    // CHECK IF LOGGED INN
    // const {username,setUsername} = useState(null) info abt user should not be stored here 
    const {setUserInfo,userInfo} = useContext(UserContext);
    const tala = process.env.REACT_APP_BASE_URL;
    console.log(tala);
    useEffect(() => {
        // fetch(`${process.env.REACT_APP_BASE_URL}/profile`, {
        fetch('http://localhost:4000/profile', {
          credentials: 'include',
        }).then(response => {
          response.json().then(userInfo => {
            // setUsername(userInfo.username);
            setUserInfo(userInfo);
          });
        });
      }, []);

      function logout() {
        // fetch(`${process.env.REACT_APP_BASE_URL}/logout`, {
        fetch('http://localhost:4000/logout', {
          credentials: 'include',
          method: 'POST',
        });
        setUserInfo(null);// info ko null krdo
      }

      const username = userInfo?.username;

     
const particlesInit = async (main) => {
  console.log(main);

  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main);
};

    return(

        <header>
          <Particles/>
        {/* heading (top) */}
            <Link to='/' className="logo">MyBlog </Link>
            <nav>
              {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username}) </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
            </nav>
              </header>
    )
}