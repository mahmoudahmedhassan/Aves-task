import {  useNavigate } from "react-router-dom";
import { postsTypes } from "../../types";
import GlobalButton from "../button";

interface PostProps {
    post: postsTypes;
    showMore: boolean;
    toggleExpansion: () => void;
    onDelete: () => void;
  }
  const Post: React.FC<PostProps> = ({ post, showMore, toggleExpansion, onDelete }) => {
    const navigate = useNavigate();
    const handleClick = (post: postsTypes) => {
        navigate(`/addpost`, { state: { post } }); // Passing post as state
      };
    return (
       <div key={post.id} className="boxShadow rounded-md p-3 relative min-h-[200px]">
        <h2 className="font-bold my-3 text-center ">{post.title}</h2>

        <p className="text-sm">
          {showMore ? post.body : `${post.body.slice(0, 100)}...`}
        </p>
        <span className="text-slate-500 font-bold" onClick={toggleExpansion}>
          {" "}
          {showMore ? "Show Less" : "Read More"}
        </span>
        <div className="flex justify-between items-center mt-3 ">
             <GlobalButton text="Edit" style="bg-slate-500 hover:bg-slate-600" onClick={() => handleClick(post)} />
           <GlobalButton text="Delete" style="bg-red-500 hover:bg-red-600" onClick={onDelete} />
        </div>
      </div>
   );
}

export default Post;
