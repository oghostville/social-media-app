import React, { useState } from 'react';


let CreatePostForm =({addPost}) =>{


const [title, setTitle] = useState("");
const [content, setContent] = useState("");


let handleSubmit = (event)=>{
    event.preventDefault();

    if(title === "" || content === ""){
        alert("Please Enter The Title and Content of the Post");
    }
    else{
        addPost({title, content});
            setTitle("")
            setContent("")
    }
}
    return(
        <div>
           <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)} 
      />
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(event) => setContent(event.target.value)} 
      ></textarea>
      <button type="submit">Post</button>
    </form>
  ;
        </div>

    )
}


export default CreatePostForm;
