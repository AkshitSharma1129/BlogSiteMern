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
            e.preventDefault();//prevent redirection of page
            // we want to send a post request when we click button 
            // we prefer await here rather than try catch
            const response = await fetch('http://localhost:4000/register', {
                // WE ARE POSTING/SENDING INFO TO 4000 PAGE IE SERVER
                method: 'POST',
                body: JSON.stringify({username,password,email}),
                headers: {'Content-Type':'application/json'},
              });
              // if (response.status === 200) {
              //   setRedirect(true);
              //   alert('registration successful');
              //   // return <Link to="/login" />;
              //   // const history = useHistory();
              //   // return <Link to="/" />;
              // // history.push('/login');
              // } else {
              //   alert('registration failed');
              // }
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

        // <form action="" className="register" onSubmit={register}>
        //     <h1>register</h1>
        //     <input type="text" placeholder="username" 
        //             value={username}
        //             onChange={e => setUsername(e.target.value)}/>
        //     <input type="password" placeholder="password"
        //             value={password}
        //             onChange={e => setPassword(e.target.value)} />
        //     <input type="email" placeholder="email"
        //             value={email}
        //             onChange={e => setEmail(e.target.value)} />
        //     <button>Register</button>
        //     <Link to={'/login'}>already Regitered? Login here</Link>
        // </form>
        <>
       <div class="container right-panel-active">
     <div class="container__form container--signup">
         <form action="" class="form" id="form1" onSubmit={register} >
           <h2 className="form__title">Register</h2>
            <input type="text" placeholder="Username" className="input" value={username}
                          onChange={e => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" className="input"  value={email}
                          onChange={e => setEmail(e.target.value)} />
             <input type="password" placeholder="Password" className="input" value={password}
                           onChange={e => setPassword(e.target.value)} />
            <button className="btn">Register</button>
            <Link to={'/login'} style={{color:"blue", textDecoration:"none", paddingTop:'10px' }}>already Regitered? Login here</Link>
          </form>
        </div> 
        </div>
        <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      > */}
        {/* <p >Welcome to BlogHub</p>
        <h3>Register</h3>

        <form
          // ref={formRef}
          onSubmit={register}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Username:</span>
            <input
              type="text"
              name="name"
              value={username}
              placeholder="please enter you username"
              onChange={e => setUsername(e.target.value)}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">email</span>
            <input
              type="email"
              name="email"
              value={email}
                            onChange={e => setEmail(e.target.value)}
              placeholder="What's your web email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">password</span>
            <input
              type="password"
              name="password"
              value={password}
                            onChange={e => setPassword(e.target.value)}
              placeholder="ennter your password!"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
          Registe
          </button>
        </form> */}
      {/* </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div> */}
    </div>
        </>
    )
}






  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);

    // emailjs
    //   .send(
    //     "service_aqjn3oi",
    //     "template_lzl46qp",
    //     {
    //       from_name: form.name,
    //       to_name: "Abhinav",
    //       from_email: form.email,
    //       to_email: "abhinavmalhotra65521@gmail.com",
    //       message: form.message,
    //     },
    //     "9OFE3wpCjWRF3knRl"
    //   )
      // .then(
      //   () => {
      //     setLoading(false);
      //     alert("Thank you. We will get back to you as soon as possible.");

        


