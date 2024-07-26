import { useQuery, useQueryClient ,useMutation} from "@tanstack/react-query";
import { fetchPosts } from "../../api";
import {postsTypes} from "../../types";
import { useState } from "react";
// import GlobalButton from "../button";
import Post from "./post";

const deletePost = async (postId: number) => {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
  });
};

function Posts(): JSX.Element {
  const queryClient = useQueryClient();
   const {data: posts,  isLoading,error,} = useQuery({
    queryKey: ['posts'], 
    queryFn: fetchPosts,
   
},

);
const mutation = useMutation({
  mutationFn: (postId: number) => deletePost(postId),
  onSuccess: () => {
    queryClient.invalidateQueries(['posts']);
  },
});

const handleDelete = (postId: number) => {
  mutation.mutate(postId);
};
const [showMore, setShowMore] = useState<Record<number, boolean>>({});
  const [search, setSearch] = useState('');

  if (!posts) {
    return <div className="text-center">No posts found.</div>;
  }

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error && typeof error === 'object' && error !== null && 'message' in error) {
    return <div>Error: {(error as { message: string }).message}</div>;
  }
  const toggleExpansion = (postId: number) => {
    setShowMore(prevState => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  }
  const filteredPosts = posts.filter((post: postsTypes) => post.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="my-10">
        <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} className="rounded-lg border-2 divide-solid border-slate-500	outline-none h-12 px-2 w-full	"/>
      </div>

      <div className=" grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {filteredPosts?.map((post: postsTypes) => (
        <Post key={post.id} post={post} toggleExpansion={() => toggleExpansion(post.id)} showMore={showMore[post.id]} onDelete={() => handleDelete(post.id)}/>
      ))}
    </div>

    </div>
    
  );
}

export default Posts;
