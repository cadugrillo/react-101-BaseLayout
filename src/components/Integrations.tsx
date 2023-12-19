import { useState } from "react";
import Button from '@mui/material/Button';
import axios from "axios";

const MyPost = {
  id: 1,
    title: 'My first Post',
    body: 'This is my first post using Axios',
    userId: 1,
}

const Integrations = () => {

  const [posts, setPosts] = useState<any[]>([]);

  const handleClick = () => {
    axios.post(`https://jsonplaceholder.typicode.com/posts`, { MyPost })
      .then((res) => {
        setPosts(res.data);
        console.log(posts);
        MyPost.id++;
      });
  }

  return (
    <>
      <h2>Welcome to Integrations</h2>
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </>
  )
}

export default Integrations