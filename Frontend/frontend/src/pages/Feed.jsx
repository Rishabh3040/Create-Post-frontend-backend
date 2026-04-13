import React, { useState,useEffect } from 'react'
import axios from "axios"


const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image: "https://plus.unsplash.com/premium_photo-1773452093235-06429f4c844d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
      caption: "Sample caption"
    }
  ])

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        setPosts(res.data.posts)
    })
  },[])

  return (
    <section className='feed-section'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className='post-card'>
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No post available</h1>
      )}
    </section>
  )
}

export default Feed