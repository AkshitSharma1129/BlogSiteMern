import {useContext, useState} from "react";
import {Link,Navigate} from "react-router-dom"; 
import {UserContext} from "../UserContext";

export default function LoginPage(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
  
    async function login(ev) {
        ev.preventDefault();
        // const base_url9 = process.env.REACT_APP_BASE_URL;
        // const path9 = "/login";
        // const url9 = base_url9 + path9;
        const response = await fetch('http://localhost:4000/login', {
          // const tala /= process.env.REACT_APP_BASE_URL;
          // console.log(tala);
        // const response = await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
          // const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
          // method: 'POST': It specifies that this is a POST request, typically used for submitting data to the server.
          body: JSON.stringify({username, password}),
          headers: {'Content-Type':'application/json'},
          credentials: 'include',
        });
        if (response.ok) {
            response.json().then(userInfo => {
              setUserInfo(userInfo);
              setRedirect(true);
            });
          } else {
            alert('wrong credentials');
          }}
          if (redirect) {
            return <Navigate to={'/'} />
          }
    return(
<div className="mainform">
<form action="" className="register" onSubmit={login}>
<div class="title">Login Here!</div>
<div class="input-container ic1">
  <input id="username" class="input" type="text" placeholder="username" value={username}
            onChange={ev => setUsername(ev.target.value)}/>
  <div class="cut"></div>
  {/* <label for="username" class="placeholder">username</label> */}
</div>
<div class="input-container ic2">
  <input id="email" class="input" type="password" placeholder="password" value={password} className="input"
            onChange={ev => setPassword(ev.target.value)}  />
  <div class="cut cut-short"></div>
  {/* <label for="password" class="placeholder">Email</label> */}
</div>
            <button type="text" class="submit">Login</button>

            <div style={{ textAlign: 'center' }}>
  <Link to={'/register'} style={{ color: 'white', fontSize: 'small', textDecoration: 'none' }}>New User? Regitser here</Link>
</div>
        </form>
        </div> 
        // </div>
        // <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} ></div>
    // </div>
    // </div>
    // </div>
    )
}