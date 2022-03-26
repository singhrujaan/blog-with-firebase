import React,{useEffect, useState} from 'react'
import {getDocs,collection,deleteDoc,doc} from 'firebase/firestore'
import {db,auth} from "../firebase.config";


const Home = ({isAuth}) => {
  const postsCollectionRef = collection(db,"posts")
  const [posts, setPosts] = useState([])

  useEffect(() => {
   const getPosts = async()=>{
     const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   }
   getPosts();
  }, [])

  useEffect(() => {
   const getPosts = async()=>{
     const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   }
   getPosts();
  }, [posts])

  // console.log(posts.author.name)

  const handleDelete =async (id) =>{
    const postDoc = doc(db,"posts",id);
    await deleteDoc(postDoc);
  }


  return (
    <div>
      {posts.map((post,index)=>{
        return(
          <div key={index} className='  rounded-sm shadow-md shadow-orange-500/30 w-1/2 ml-auto mr-auto text-black flex flex-col mt-24 py-20 items-center'>
          {isAuth && auth.currentUser.uid === post.author.id &&  <button className='text-xl font-light absolute right-96 -mt-14 hover:cursor-pointer' onClick={()=>handleDelete(post.id)}>X</button>}
          {/* <div className='flex'> */}
            <div className='text-2xl font-semibold'>{post.title}</div>
          {/* </div>  */}
           <div className='text-xl font-light'>{post.content}</div>
           
          </div>
        )
      })}
    </div>
  )
}

export default Home