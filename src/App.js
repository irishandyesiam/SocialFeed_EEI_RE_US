import React, { useState } from 'react';
import Post from './Components/Post/Post';
import DisplayPost from './Components/DisplayPost/DisplayPost';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {

  const [posts, setPosts] = useState([{userName: 'Amiee', comment: "First to comment!"}, {userName: 'Amy', comment: "Second to comment!"}])

  return (
    <div>
      <Post />
      {/* <DisplayPost xyzposts={posts}/> */}
      <CreatePost />
    </div>
  );
}

export default App;
