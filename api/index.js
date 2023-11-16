
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const dotenv = require('dotenv')
dotenv.config();

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

// app.use(cors({credentials:true,origin:process.env.FRONTENDURL}));
app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect(process.env.MONGOURL);
// uLmOHFe1OVKYoIfQ

// app.post('/register',async (req,res)=>{
//     // since we want to send information from register page

//     // we will be using post 
//     // so now in register page add value={username} and usestate in input tag
//     // request karo body se
//     const {username,password,email} = req.body;
    // create a new user after mongoose setup
    // try{
    //     const userDoc = await User.create({username
    //                                     ,password:bcrypt.hashSync(password,salt),email });
    //     res.json(userDoc)
    // }
    // catch(error){
    //     res.status(400).json(error);
    // }
    // res.json({requestData : {username,password}});
// })
app.post('/register',async (req,res)=>{
  const {username,password,email} = req.body
  const findUser = await User.findOne({username} )
  if(!findUser){
    try{
      const userDoc = await User.create({username,password:bcrypt.hashSync(password,salt),email} )
      res.json(userDoc)
    }catch(e){
        res.status(400).json('Sorry, not able to register')
    }
  }
  else{
    res.status(404).json('User already exists') 
  }
});
// post/send data we get from login page
app.post("/login",async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    // comparesync se we check password match
    if (passOk) {
       //login
       // add jswonwebtoken to store data
       jwt.sign({username,
                id:userDoc._id}, secret, {}, (err,token) => {
                    if (err) throw err;
                    // res.json(token);  token is displayed
                    res.cookie('token', token).json(
                        // 'ok'
                        {
                        id:userDoc._id,
                        username,  } 
                      );
                    //   error aayega change cors()
                    //   iss cookie mai hum token daal rhe hai apna
//                     The code snippet you provided is using the res.cookie() method to set a cookie in the HTTP response, and then sending a JSON response using the res.json() method.

// Here's a breakdown of the code:

// res.cookie('token', token) is used to set a cookie named 'token' in the HTTP response. The res.cookie() method is typically provided by a web framework like Express. It takes two main arguments:

// The name of the cookie: In this case, it is 'token'.
// The value of the cookie: In this case, the value is the token variable, which represents the JWT generated previously.

                });
    }
//     jwt.sign() is a function that is used to create a JWT. It takes three main arguments:

// The payload: In this case, it includes an object with properties like username and id. These properties contain data associated with the user.

// The secret: This is a secret key used to sign the token and verify its authenticity later.
    else {
        res.status(400).json('wrong credentials');
      }
})

// check if user is logged in 
// cokkie has a token and see if token is vaild ie user wahi hai kya joh logged in hai
// each user unique token and uss token se data aayega   so se ki usi token se data aa rha toh logged in
app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
      if (err) throw err;
      res.json(info);
    });
  });

app.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok');
});

// app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
//     // res.json({files:req.file});
//     const {originalname,path} = req.file;
//     const parts = originalname.split('.');
//     const ext = parts[parts.length - 1];
//     const newPath = path+'.'+ext;
//     fs.renameSync(path, newPath);
//     res.json({ext});
//     // now create a new model schema in db to store posts

//     const {token} = req.cookies;

//     jwt.verify(token, secret, {}, async (err,info) => {
//     if (err) throw err;
//     const {title,summary,content} = req.body;
//     const postDoc = await Post.create({
//       title,
//       summary,
//       content,
//       cover:newPath,
//       author:info.id,
//     });
//     // res.json(postDoc);
//     res.json(postDoc);
//   });
  
// })

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  let imagePath = path.join(__dirname, 'No_Image_Available.jpeg');

  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);
    imagePath = newPath;
  }

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: imagePath,
      author: info.id,
    });
    res.json(postDoc);
  });
});

app.post('/post/:id/like', async (req, res) => {
  const { id } = req.params;
  const { token } = req.cookies;

  try {
    const postDoc = await Post.findById(id);
    const user = await User.findOne({ token }); // Retrieve the user by token

    if (!postDoc || !user) {
      return res.status(404).json('Post or user not found.');
    }

    // Check if the user has already liked the post
    if (user.likedPosts.includes(id)) {
      return res.status(400).json('You have already liked this post.');
    }

    postDoc.likes += 1; // Increment the like count
    user.likedPosts.push(id); // Add the post ID to the user's likedPosts array

    await postDoc.save();
    await user.save();

    res.json({ message: 'Post liked successfully.', likes: postDoc.likes });
  } catch (error) {
    res.status(500).json('An error occurred while liking the post.');
  }
});







app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      const postDoc = await Post.findById(id);
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(400).json('you are not the author');
      }
      // await postDoc.update({
      //   title,
      //   summary,
      //   content,
      //   cover: newPath ? newPath : postDoc.cover,
      // });
      postDoc.title = title;
      postDoc.summary = summary;
      postDoc.content = content;
      postDoc.cover = newPath ? newPath : postDoc.cover;
  
      await postDoc.save();
      res.json(postDoc);
    });
});
// get posts as we need to get the data from posts to display it in blogs page
app.get('/post', async (req,res) => {
    // res.json(await Post.find().populate("author", "username"));
    res.json(await Post.find().populate("author", "username"));
    // const postDoc = await Post.find().populate('author','username');
    // res.json(postDoc);
  });
  app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author','username');
    res.json(postDoc);
  })

  app.delete('/post/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const postDoc = await Post.findById(id);
  
      if (!postDoc) {
        return res.status(404).json('Post not found.');
      }
  
      // Check if the authenticated user is the author of the post
      const { token } = req.cookies;
      jwt.verify(token, secret, {}, async (err, info) => {
        if (err) throw err;
        
        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
        if (!isAuthor) {
          return res.status(403).json('You are not authorized to delete this post.');
        }
  
        await Post.deleteOne({ _id: id });
  
        res.json({ message: 'Post deleted successfully.' });
      });
    } catch (error) {
      res.status(500).json('An error occurred while deleting the post.');
    }
  });
  
  
app.listen(4000); 

// mongodb+srv://akshitlovesmusic:5K4CEVKIsSgW3MKj@cluster0.s7owquc.mongodb.net/?retryWrites=true&w=majority