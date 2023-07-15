import {useState} from "react";
import {Link,Navigate } from 'react-router-dom';
// import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
export default function RegisterPage(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [redirect,setRedirect] = useState(false);
    async function register(e){
      const tala = process.env.REACT_APP_BASE_URL;
      console.log(tala);
            e.preventDefault();
            console.log(process.env.REACT_APP_BASE_URL);
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
            // const response = await fetch('http://localhost:4000/register', {
              
                method: 'POST',
                body: JSON.stringify({username,password,email}),
                headers: {'Content-Type':'application/json'},
              });
              
              if (response.status === 200) {
                alert('registration successful');
                setRedirect(true)
                } else if(response.status === 404) {
                alert('User already exists');
                }
                else{
                    alert('Sorry, not able to register');
                }
    }

    if (redirect) {
      return <Navigate to={'/'} />
    }
    

    return(
<div className="mainform">
        <form action="" className="register" onSubmit={register}>
            <div class="title">Welcome</div>
<div class="subtitle">Let's create your account!</div>
<div class="input-container ic1">
  <input id="username" class="input" type="text" placeholder=" " value={username}
                    onChange={e => setUsername(e.target.value)}/>
  <div class="cut"></div>
  <label for="username" class="placeholder">username</label>
</div>

<div class="input-container ic2">
  <input id="email" class="input" type="text" placeholder="email" value={email}
                    onChange={e => setEmail(e.target.value)}/>
  <div class="cut cut-short"></div>

</div>
<div class="input-container ic2">
  <input id="email" class="input" type="password" placeholder="password" value={password}
                    onChange={e => setPassword(e.target.value)}/>
  <div class="cut cut-short"></div>

</div>

<button type="text" class="submit">Register</button>

<div style={{ textAlign: 'center' }}>
  <Link to={'/login'} style={{ color: 'white', fontSize: 'small', textDecoration: 'none' }}>already Registered? Login here</Link>
</div>

        </form>       
        </div>
    )
}







        


