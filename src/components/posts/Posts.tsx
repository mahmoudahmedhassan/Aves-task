import {
  useQuery,
  useQueryClient,
  useMutation,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../../api";
import { postsTypes } from "../../types";
import { useState } from "react";
import Post from "./post";
import GlobalButton from "../button";

 
function Posts(): JSX.Element {
  const queryClient = useQueryClient();
  
  const {
    data: posts,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn:fetchPosts,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
       return lastPage.length > 0 ? allPages.length+1   : undefined;
    },
   });

   console.log("posts", posts?.pages.flat());
 
  // delete post
  const mutation = useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  const handleDelete = (postId: number) => {
    mutation.mutate(postId);
  };
  const [showMore, setShowMore] = useState<Record<number, boolean>>({});
  const [search, setSearch] = useState("");

  const toggleExpansion = (postId: number) => {
    setShowMore((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };
  // const filteredPosts =posts?.pages.length > 0 && posts?.pages.flat().filter((post: postsTypes) => post.title.toLowerCase().includes(search.toLowerCase()));
  const filteredPosts = posts?.pages
    .flat()
    .filter((post: postsTypes) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );

  if (status === "error") return <div>{error.message}</div>;
  if (status === "success" && posts.pages.length === 0)
    return <div>No posts found</div>;

  return (
    <div>
      <div className="my-10">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border-2 divide-solid border-slate-500	outline-none h-12 px-2 w-full	"
        />
      </div>

      <div className=" grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {filteredPosts?.map((post: postsTypes) => (
          <Post
            key={post.id}
            post={post}
            toggleExpansion={() => toggleExpansion(post.id ?? -1)}
            showMore={showMore[post.id ?? -1]}
            onDelete={() => handleDelete(post.id ?? -1)}
          />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <GlobalButton
          text={isFetchingNextPage ? "Loading..." : "Load More"}
          style="bg-slate-500 hover:bg-slate-600"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage}
        />
      </div>
    </div>
  );
}

export default Posts;
