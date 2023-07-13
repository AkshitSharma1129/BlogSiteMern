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
        const response = await fetch('http://localhost:4000/login', {
          method: 'POST',
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
      <div class="container right-panel-active">
      <div class="container__form container--signup">
        <form action="" className="form" onSubmit={login}>
            <h2 className="form__title">login</h2>
            <input type="text" placeholder="username" className="input"
            value={username}
            onChange={ev => setUsername(ev.target.value)}  />
            <input type="password" placeholder="password"
            value={password} className="input"
            onChange={ev => setPassword(ev.target.value)} />
            <button className="btn">Login</button>
            <Link to={'/register'} style={{color:"blue", textDecoration:"none", paddingTop:'10px' }}> New User? Regitser here</Link>
        </form>
        </div> 
        </div>
        // <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} ></div>
    // </div>
    // </div>
    // </div>
    )
}