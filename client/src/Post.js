import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { useState, useEffect, useContext} from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';  // Import Chakra UI components
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Avatar from '@mui/material/Avatar';
// import UserContext  from './UserContext'; // Import the UserContext
import { UserContext} from './UserContext'; // Import UserContext and UserContextProvider

export default function Post({_id,title,summary,cover,content,createdAt,author}){

  // const [likeCount, setLikeCount] = useState(0);
  // const [liked, setLiked] = useState(false); // New state to track if the post is liked

  // const handleLike = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:4000/post/${_id}/like`, {
  //       method: 'POST',
  //     });
  //     const data = await response.json();
  //     setLikeCount(data.likes);
  //     setLiked(true); // Set liked state to true after successful like
  //   } catch (error) {
  //     console.error('Error liking the post:', error);
  //   }
  // };
  const { loggedInUser, setLoggedInUser } = useContext(UserContext); // Get user data from context
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Fetch the like count and check if the post is liked by the user
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:4000/post/${_id}`);
        const postData = await response.json();
        setLikeCount(postData.likes);
        
        // Assuming you have some user context or state for authentication
        // If the user is logged in and has liked the post, setLiked to true
        if (loggedInUser && loggedInUser.likedPosts.includes(_id)) {
          setLiked(true);
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    }
    fetchData();
  }, [loggedInUser, _id]);

  const handleLike = async () => {
    try {
      const response = await fetch(`http://localhost:4000/post/${_id}/like`, {
        method: 'POST',
      });
      const data = await response.json();
      setLikeCount(data.likes);

      // Update user's likedPosts in context if the user is logged in
      if (loggedInUser) {
        setLoggedInUser(prevUser => ({
          ...prevUser,
          likedPosts: [...prevUser.likedPosts, _id],
        }));
      }
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  const tala = process.env.REACT_APP_BASE_URL;
    console.log(tala);



    return ( 


     

<Card maxW='sm' contentStyle={{ background: '#EEEEEE', borderRadius: '16px' }}>
  <CardBody>
  <Link to={`/post/${_id}`}>
    <Image
      src={'http://localhost:4000/'+cover}
      alt='Green double couch with wooden legs'
      borderRadius='7px'
      style={{ width: '100%', height: 'auto', maxHeight: '200px' }} 
    />
    </Link>
    <Stack mt='6' spacing='3'>
    <Link to={`/post/${_id}`}>
 <Heading size='md' textAlign='center' color='blue.600' fontWeight='bold' fontSize='30px'>
            {title}
          </Heading>
          </Link>
       <Text fontFamily='serif' textAlign='center' fontSize='16px' color='black'>
            {summary}
          </Text>
          <Divider mt="4" borderColor="black" />
          <hr style={{ borderTop: '1px solid black', margin: '20px 0' }} />
    </Stack>
  </CardBody>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ fontSize: '14px', color: 'black' }}>
      
        {/* <FaRegHeart style={{ color: 'gray' }} /> */}
        {/* <Avatar>H</Avatar> */}
        <Avatar>{author.username.charAt(0).toUpperCase()}</Avatar>
    </div>
  <span style={{ fontSize: '14px', color: 'black' }}>
    
  </span>
  <span style={{ fontSize: '14px', color: 'black' }}>
  <strong style={{ display: 'inline-block', width:'90px' }}>author:</strong>
  {author.username}
  <br />
  <strong style={{ display: 'inline-block', width:'90px'  }}>created at:</strong>
  {formatISO9075(new Date(createdAt))}
</span>

</div>

  <CardFooter>
  

  </CardFooter>
</Card>



    )
}