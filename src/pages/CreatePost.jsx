import React from "react";
import { useState,useEffect } from "react";
import {addDoc,collection} from 'firebase/firestore'
import {db,auth} from "../firebase.config";
import { useNavigate } from "react-router";


const CreatePost = ({isAuth}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate();
  const postsCollectionRef = collection(db,"posts")
  

  const createPost =async ()=>{
    await addDoc(postsCollectionRef,{title,content,author:{name:auth.currentUser.displayName,id:auth.currentUser.uid}})
    navigate('/')
  }
  
  useEffect(() => {
  if(!isAuth){
    navigate('/login')
  }
  }, [])
  
  return (
    <div className="h-screen">
      <div className="bg-orange-300 rounded-3xl shadow-lg shadow-orange-500/95 w-1/2 ml-80 text-white flex flex-col mt-24 py-10 items-center">
        <div className="space-x-5 my-10">
          <label htmlFor="title" className="text-xl font-semibold">Title</label>
          <input className="text-black text-xl" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter title" type="text" />
          
        </div>
        <div className="space-x-5">
          <label htmlFor="content" className="text-xl font-semibold">Content</label>
          <textarea
          placeholder="Enter text here"
            className="text-black text-xl"
            name="content"
            id="content"
            cols="30"
            rows="8"
            value={content}
            onChange={(e)=>{setContent(e.target.value)}}
          ></textarea>
        </div>
        <button type="submit" className="bg-orange-900 m-3 text-red-900 text-2xl" onClick={createPost}>submit</button>
      </div>
    </div>
  );
};

export default CreatePost;
