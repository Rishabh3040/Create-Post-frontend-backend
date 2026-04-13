import React from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'


const CreatePost = () => {

    const navigate = useNavigate()


   const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await axios.post("http://localhost:3000/create-post", formData, {
        
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      alert("Post created successfully");
      navigate('/feed');
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Error creating post");
    }
   }


  return (
 <section className='create-post-section'>
        <h1>Create post</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image" accept="image/*" />
            <input type="text" name="caption" placeholder='Enter caption' required />
            <button type='submit' className='btn-primary'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost