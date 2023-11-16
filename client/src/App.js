// // import './App.css';
// // import Post from './Post'
// // import Header from './Header'
// // import Layout from "./Layout"
// // import { Route, Routes } from 'react-router-dom';
// // import IndexPage from './pages/IndexPage';
// // import LoginPage from './pages/LoginPage';
// // import RegisterPage from './pages/RegisterPage';
// // import { UserContext } from "./UserContext"; // Import UserContext
// // import CreatePost from './pages/CreatePost';
// // import PostPage from "./pages/PostPage";
// // import EditPost from "./pages/EditPost";
// // import { HelmetProvider, Helmet } from 'react-helmet-async';
// // // import { UserContextProvider } from "./UserContext"; // Import UserContextProvider

// // function App() {
// //   return (
// // <HelmetProvider>fdsaf 
// //       <Helmet>
// //         <title>Akshit's Blog</title>
// //       </Helmet>
// //     {/* <UserContextProvider> */}
// //     <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
// //     <Routes>
// // {/* main part of web page */}
// //     {/* <Route index element={ */}
// //         {/* <Header /> */}
// //         {/* // <Post /> */}

// //     {/* }/> */}
// //     {/* all the routes will have main ele and header */}
// //     {/* <Route path={'/login'} element={div>login page</div>} /> */}
// //       {/* // <main> */}
// //         {/* <Header></Header>  */}
// //         {/* // <div>login page</div>
// //       // </main> */}
// //     {/* // }/> */}
// //     <Route path="/" element={<Layout />}>
// //             <Route index element={<IndexPage />} />
// //     {/* <Route index element={<Post />} /> */}
// //     {/* The index property indicates that this is the default component to render for the path. */}
// // {/* If you have multiple <Route> components with the same path, the one with the index property set will take precedence and be rendered as the default content for that path */}
// //     {/* <Route path="/login" element={<div>login page</div>} /> */}
// //     {/* <Route path="/" element={<Layout />}> sets up a route for the root path ("/") in your application. When the URL matches the root path, the Layout component will be rendered.

// // <Route index element={<IndexPage />} /> is a nested route within the Layout component. It specifies that when the URL matches the root path ("/") and the Layout component is rendered, the IndexPage component will be rendered as the default content for the root path.

// // So, in summary, this configuration sets up a route for the root path ("/") and renders the Layout component as the main layout for that path. Within the Layout component, the IndexPage component is set as the default content to be rendered when the root path is accessed. */}
// //     <Route path="/login" element={<LoginPage />} />
// //     <Route path="/register" element={<RegisterPage />} />
// //     <Route path="/create" element={<CreatePost />} />
// //     <Route path="/post/:id" element={<PostPage />} />
// //     <Route path="/edit/:id" element={<EditPost />} />
// //     </Route>
// //     </Routes>
// //     {/* </UserContextProvider> */}
// //     </UserContext.Provider>
// //     </HelmetProvider>
// //   );
// // }

// // export default App;

// import './App.css';
// import { useContext } from 'react'; // Import useContext
// import { Routes, Route } from 'react-router-dom';
// import { HelmetProvider, Helmet } from 'react-helmet-async';
// import Layout from './Layout';
// import IndexPage from './pages/IndexPage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import CreatePost from './pages/CreatePost';
// import PostPage from './pages/PostPage';
// import EditPost from './pages/EditPost';
// // import { UserContext } from './UserContext'; // Import UserContext
// import { UserContext, UserContextProvider } from './UserContext'; // Import UserContext and UserContextProvider


// function App() {
//   const { loggedInUser, setLoggedInUser } = useContext(UserContext); // Get user data from context

//   return (
//     <HelmetProvider>
//       <Helmet>
//         <title>Akshit's Blog</title>
//       </Helmet>
//       <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<IndexPage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/register" element={<RegisterPage />} />
//             <Route path="/create" element={<CreatePost />} />
//             <Route path="/post/:id" element={<PostPage />} />
//             <Route path="/edit/:id" element={<EditPost />} />
//           </Route>
//         </Routes>
//       </UserContext.Provider>
//     </HelmetProvider>
//   );
// }

// export default App;
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import { UserContextProvider } from './UserContext'; // Import UserContextProvider

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Akshit's Blog</title>
      </Helmet>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </HelmetProvider>
  );
}

export default App;
