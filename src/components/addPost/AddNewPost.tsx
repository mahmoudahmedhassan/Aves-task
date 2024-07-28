import { useState } from "react";
import GlobalButton from "../button";
// import { Post } from "../../types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost, updatePost } from "../../api";

export type Post = {
  id: number;
  title: string;
  body: string;
  post: {
    id: number;
    title: string;
    body: string;
  };
};
function AddNewPost({ post }: Post) {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");

  const queryClient = useQueryClient();

  // Create post
  const { mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  // Update post
  const { mutate: mutateupdate } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleCreatePost = () => {
    if (!title || !body) {
      alert("Please fill in all fields");
      return;
    }
    mutate({ title, body, userId: 1 });
    setTitle("");
    setBody("");
  };
 
  const handleUpdatePost = () => {
    if (!title || !body) {
      alert("Please fill in all fields");
      return;
    }
    mutateupdate({ ...post, title, body, userId: 1 });
    setTitle("");
    setBody("");
  };

  return (
    <section className="w-full  ">
      <form className="flex flex-col gap-4">
        <input
          type="text"
          required
          placeholder="title"
          
          className="h-12 px-2 rounded-lg border-2 divide-solid border-slate-500	outline-none	"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          required
          placeholder="body"
          className="h-20 px-2 rounded-lg border-2 divide-solid border-slate-500	outline-none"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <GlobalButton
          text={post ? "Update Post" : "Add Post"}
          style="bg-slate-500 hover:bg-slate-600"
          onClick={post ? handleUpdatePost : handleCreatePost}
        />
      </form>
    </section>
  );
}

export default AddNewPost;
