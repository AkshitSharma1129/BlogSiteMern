import './App.css';
import Post from './Post'
import Header from './Header'
import Layout from "./Layout"
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {UserContextProvider} from "./UserContext";
import CreatePost from './pages/CreatePost';
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import { HelmetProvider, Helmet } from 'react-helmet-async';
function App() {
  return (
<HelmetProvider>
      <Helmet>
        <title>Akshit's Blog</title>
      </Helmet>
    <UserContextProvider>
    <Routes>
{/* main part of web page */}
    {/* <Route index element={ */}
        {/* <Header /> */}
        {/* // <Post /> */}

    {/* }/> */}
    {/* all the routes will have main ele and header */}
    {/* <Route path={'/login'} element={div>login page</div>} /> */}
      {/* // <main> */}
        {/* <Header></Header>  */}
        {/* // <div>login page</div>
      // </main> */}
    {/* // }/> */}
    <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
    {/* <Route index element={<Post />} /> */}
    {/* The index property indicates that this is the default component to render for the path. */}
{/* If you have multiple <Route> components with the same path, the one with the index property set will take precedence and be rendered as the default content for that path */}
    {/* <Route path="/login" element={<div>login page</div>} /> */}
    {/* <Route path="/" element={<Layout />}> sets up a route for the root path ("/") in your application. When the URL matches the root path, the Layout component will be rendered.

<Route index element={<IndexPage />} /> is a nested route within the Layout component. It specifies that when the URL matches the root path ("/") and the Layout component is rendered, the IndexPage component will be rendered as the default content for the root path.

So, in summary, this configuration sets up a route for the root path ("/") and renders the Layout component as the main layout for that path. Within the Layout component, the IndexPage component is set as the default content to be rendered when the root path is accessed. */}
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
