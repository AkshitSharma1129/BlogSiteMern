import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { StyledEngineProvider } from '@mui/material/styles';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function Post({_id,title,summary,cover,content,createdAt,author}){
  const tala = process.env.REACT_APP_BASE_URL;
    console.log(tala);
    return ( 


          {/* <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  > */}
  {/* <h3 className="vertical-timeline-element-title"> */}
     {/* <div className="image"> */}
      {/* <Link to={`/post/${_id}`}> */}
      {/* <img src={'http://localhost:4000/'+cover} alt=""/> */}
      {/* <img src={`${process.env.REACT_APP_BASE_URL}${cover}`} alt="" /> */}
      {/* <img src="https://images.hindustantimes.com/auto/img/2023/04/12/600x338/urus-s1_1664456748431_1681299436548_1681299436548.jpg" alt="" /> */}
      {/* </Link> */}
      {/* </div> */}
      {/* </h3> */}
      {/* <h3 className="vertical-timeline-element-title"> */}
      {/* <div className="texts" style={{ color: 'white', textDecoration: 'none' }}>
      <Link to={`/post/${_id}`}>
      <h2 style={{ color: '#080000 ', textDecoration: 'none' }}>{title}</h2>
      </Link> */}
      {/* <h2>Lamborghini pure combustion engine models sold out: reports</h2> */}
      {/* <p className="info">
        <a href="" className="author" style={{ color: 'white', textDecoration: 'none' }} >{author.username}</a>
        <time style={{ color: '	#F5F5F5'}}>{formatISO9075(new Date(createdAt))}</time> */}
        {/* <time>{createdAt}</time> */}
      {/* </p>
      <p className='summary'>{summary}</p> */}
      {/* </div> */}
      {/* </h3> */}
      {/* </VerticalTimelineElement> */}
    {/* </div>  */}

<Card maxW='sm'>
  <CardBody>
    <Image
      src={'http://localhost:4000/'+cover}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}a</Heading>
      <Text>
      {summary}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>


{/* /* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <Link to={`/post/${_id}`}>
    <CardMedia
      component="img"
      height="140"
      image={`http://localhost:4000/${postInfo.cover}`}
      alt="Image of blog"
    />
  </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {summary}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <time style={{ color: '	#F5F5F5'}}>{formatISO9075(new Date(createdAt))}</time>
          </Typography>

        </CardContent>
        </CardActionArea>
        <CardActions>
        <Typography variant="body2" color="textSecondary">
        @{author.username}
</Typography>
        <Typography variant="body2" color="textSecondary">
        @{postInfo.author.username}
</Typography>
      </CardActions> */}
    {/* </Card>   */}
  {/* //  </div> */}
    )
}