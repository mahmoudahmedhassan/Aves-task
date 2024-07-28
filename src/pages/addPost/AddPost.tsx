import { useLocation } from "react-router-dom";
import AddNewPost from "../../components/addPost/AddNewPost"
import { Post } from "../../types";
 
 
function AddPost() {
  const location = useLocation();
  const post: Post = location.state?.post;
  console.log(post);
 
  return (
    <div className="container my-10">

      <h1 className="text-center text-bold text-3xl py-6">Add Post</h1>
      <AddNewPost post={post}/> </div>
  )
}

export default AddPost
