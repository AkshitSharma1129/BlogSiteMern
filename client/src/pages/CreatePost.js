import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const tala = process.env.REACT_APP_BASE_URL;
    console.log(tala);
    async function createNewPost(ev) {
      const data = new FormData();
      data.append('title', title);
      data.append('summary', summary);
      data.append('content', content);
      data.append('file', files[0]);// as we want to send only 1 file
      ev.preventDefault();
      const tala1 = process.env.REACT_APP_BASE_URL;
      console.log(tala1);    
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/post`, {
        method: 'POST',
        body: data,
        // we want to send data   so either we can send json or create a var to store data named as data
        // credentials: 'include',
        // go to server now
        credentials: 'include',// to send cookie
      });
      if (response.ok) {
        setRedirect(true);
      }
    }
  
    if (redirect) {
      return <Navigate to={'/'} />
    }
    
    return(
        <form onSubmit={createNewPost} className="postform" >
          <h1>Create Post</h1>
        <input type="title"
               placeholder={'Title'}
               value={title}
             onChange={ev => setTitle(ev.target.value)} className="inpcreate"
                />
        <input type="summary"
               placeholder={'Summary'}
               value={summary}
               onChange={ev => setSummary(ev.target.value)}  className="inpcreate"
                />
        <input type="file"
              onChange={ev => setFiles(ev.target.files)}    className="inpcreate"/>
        <ReactQuill value={content} 
        onChange={newValue=>setContent(newValue)}
        modules={modules} formats={formats} className="inpcreate"/> 
        {/* instead of textbox */}
        <button style={{marginTop:'5px'}} className="postbtn">Create post</button>
      </form>
    )
}