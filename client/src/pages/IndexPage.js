import Post from '../Post'

import {useEffect, useState} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import yourImageURL from './logon.png';
export default function IndexPage(){
    const [posts,setPosts] = useState([]);
    const tala = process.env.REACT_APP_BASE_URL;
    console.log(tala);
    useEffect(() => {
        // fetch(`${process.env.REACT_APP_BASE_URL}/post`).then(response => {
        fetch('http://localhost:4000/post').then(response => {
          response.json().then(posts => {
            setPosts(posts);
          });
        });
        // or const response = await fetch
      }, []);


      const timelineStyle = {
        paddingTop: '100px',
      };

    return(
        <><h1 className='blogg'>BLOGS</h1>
<VerticalTimeline  style={timelineStyle}>
        
        {posts.length > 0 && posts.map(post => (
          <VerticalTimelineElement
          key={post._id}
          // date={post.createdAt}
          // dateClassName="date"
          // iconStyle={{ background: '#f58f7c', color: '#fff' }
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fffafa', borderRadius:'9px' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          // date="2011 - present"
          iconStyle={{
            backgroundImage: `url(${yourImageURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '50px', // Set the width of your image
            height: '50px', // Set the height of your image
          }}
          // icon={<i className="fa-regular fa-book" style={{ color: '#080808' }} />}
          >
           
            
        <Post {...post} />
        </VerticalTimelineElement>
      ))}
      <div
    className="vertical-timeline-element--icon"
    style={{
      background: 'url(quaver) center center no-repeat',
      width: '20px', // Set the width and height of the image
      height: '20px',
      position: 'absolute',
      left: '50%', // Position the image in the middle of the timeline
      transform: 'translateX(-50%)',
      top: 0, // Position the image at the top of the timeline
    }}
    alt="Thunder"
  ></div>
      </VerticalTimeline>
        {/* <Post/>
        <Post/>
        <Post/> */}
        </>
    )
}