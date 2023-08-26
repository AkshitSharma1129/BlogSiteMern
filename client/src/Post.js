import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { StyledEngineProvider } from '@mui/material/styles';
import { Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';  // Import Chakra UI components

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
export default function Post({_id,title,summary,cover,content,createdAt,author}){
  const tala = process.env.REACT_APP_BASE_URL;
    console.log(tala);
    return ( 


     

<Card maxW='sm' contentStyle={{ background: '#fffafa', borderRadius: '16px' }}>
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
  <span style={{ fontSize: '14px', color: 'black' }}>
    <strong>author:</strong> {author.username}
  </span>
  <span style={{ fontSize: '14px', color: 'black' }}>
    <strong>created at:</strong> {formatISO9075(new Date(createdAt))}
  </span>
</div>

  <CardFooter>
  

  </CardFooter>
</Card>



    )
}