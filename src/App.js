import React, { useState } from 'react';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

  const [posts, setPosts] = useState([{userName: 'Amiee', comment: "First to comment!"}, {userName: 'Amy', comment: "Second to comment!"}, {userName: 'Dug', comment: "squirrel!!"}])

  function addNewPost (newPost){
    let tempPosts = [...posts, newPost];
    
    setPosts(tempPosts);
    console.log(tempPosts);
  }
  return (
    <div>
      <DisplayPost xyzposts={posts}/>
      <CreatePost addNewPostProperty={addNewPost} />
    </div>
  );
}

export default App;
