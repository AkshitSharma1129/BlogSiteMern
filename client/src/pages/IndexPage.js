import Post from '../Post'
import {useEffect, useState} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function IndexPage(){
    const [posts,setPosts] = useState([]);
    const tala = process.env.REACT_APP_BASE_URL;
    console.log(tala);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BASE_URL}/post`).then(response => {
        // fetch('http://localhost:4000/post').then(response => {
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
          contentStyle={{ background: 'linear-gradient(to right top, #051937, #403d5a, #73677f, #a595a6, #d6c7d1)', }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          // date="2011 - present"
          iconStyle={{ background: 'linear-gradient(to right top, #ced8e6, #bfd9ed, #abdbf0, #95ddee, #7fdfe7)' }} 
          // icon={<i className="fa-regular fa-book" style={{ color: '#080808' }} />}
          >
            
            
        <Post {...post} />
        </VerticalTimelineElement>
      ))}
      </VerticalTimeline>
        {/* <Post/>
        <Post/>
        <Post/> */}
        </>
    )
}