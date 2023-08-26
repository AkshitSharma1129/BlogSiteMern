// In React, the useParams hook is part of the react-router-dom library and is used for accessing URL parameters in functional components. It allows you to retrieve dynamic segments from the URL and use them within your component.
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../UserContext";
import {Link ,useNavigate} from 'react-router-dom';
// import { Typewriter } from 'typewriter-effect';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';

import Typewriter from 'react-typewriter';
export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();
  const navigate = useNavigate();
  // const [titleString, setTitleString] = useState('');
  const tala = process.env.REACT_APP_BASE_URL;
    console.log(tala);
  useEffect(() => {
    // fetch(`${process.env.REACT_APP_BASE_URL}/post/${id}`)
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
          // setTitleString(postInfo.title); // Store postInfo.title in the titleString state variable
        });
      });
  }, [id]);
  const handleDelete = () => {
    // fetch(`${process.env.REACT_APP_BASE_URL}/post/${id}`, {
    fetch(`http://localhost:4000/post/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(response => {
        if (response.ok) {
          // Redirect to the home page or any other desired page
          navigate("/");
          // return <Navigate to={"/"} />
        } else {
          console.error("Failed to delete the post.");
        }
      })
      .catch(error => console.error(error));
  };

  if (!postInfo) return '';
  
  return (
    <div className="post-page">

{/* <h1>
  <Typewriter
    string={titleString}
    delay={75}
    cursor
    cursorStyle="_"
  />
</h1> */}

{/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`http://localhost:4000/${postInfo.cover}`}
          alt="green iguana"
        />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {postInfo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {{__html:postInfo.content}}
          </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>
        <Typography variant="body2" color="textSecondary">
        @{postInfo.author.username}
</Typography>
        <Typography variant="body2" color="textSecondary">
        @{postInfo.author.username}
</Typography>
      </CardActions>
    </Card> */}


      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit this post
          </Link>
          <button className="delbtn" onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-delete"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
            Delete this post
          </button>
        </div>
      )};
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
    </div>
  );
}