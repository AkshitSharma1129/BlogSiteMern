import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Post({_id,title,summary,cover,content,createdAt,author}){
    return ( 
        <div className='post'>
          {/* <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
    
  > */}
  {/* <h3 className="vertical-timeline-element-title"> */}
     <div className="image">
      <Link to={`/post/${_id}`}>
      <img src={'http://localhost:4000/'+cover} alt=""/>
      {/* <img src="https://images.hindustantimes.com/auto/img/2023/04/12/600x338/urus-s1_1664456748431_1681299436548_1681299436548.jpg" alt="" /> */}
      </Link>
      </div>
      {/* </h3> */}
      {/* <h3 className="vertical-timeline-element-title"> */}
      <div className="texts" style={{ color: 'white', textDecoration: 'none' }}>
      <Link to={`/post/${_id}`}>
      <h2 style={{ color: '#080000 ', textDecoration: 'none' }}>{title}</h2>
      </Link>
      {/* <h2>Lamborghini pure combustion engine models sold out: reports</h2> */}
      <p className="info">
        <a href="" className="author" style={{ color: 'white', textDecoration: 'none' }} >{author.username}</a>
        <time style={{ color: '	#F5F5F5'}}>{formatISO9075(new Date(createdAt))}</time>
        {/* <time>{createdAt}</time> */}
      </p>
      <p className='summary'>{summary}</p>
      </div>
      {/* </h3> */}
      {/* </VerticalTimelineElement> */}
    </div> 
   
    )
}