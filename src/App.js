import React, { useState } from 'react';
import Post from './Components/Post/Post'

function App() {

  const [posts, setPosts] = useState([{userName: 'Amiee', comment: "First to comment!"}, {userName: 'Amy', comment: "Second to comment!"}])

  return (
    <div>
      <Post xyzposts={posts}/>
    </div>
  );
}

export default App;
