import { AxiosResponse } from 'axios';
import { postsTypes } from '../types';
import axioshelper from './axiosConfig';
 
// Fetch posts
// export const fetchPosts = async (): Promise<postsTypes[]> => {
//   const response = await axioshelper.get('/posts');
//   return response.data;
// };

// export const fetchPosts = async ({ pageParam = 1 }): Promise<postsTypes[]> => {
//   const response = await axioshelper.get('/posts', {
//     params: {
//       _page: pageParam,
//       _limit: 10,  
//     },
//   });
//   return response.data;
// };
 
export const fetchPosts = async ({ pageParam }: { pageParam: number }): Promise<postsTypes[]> => {
  console.log("pageParam",pageParam);
  const res: AxiosResponse<postsTypes[]> = await axioshelper.get(`/posts?_page=${pageParam}`);
  return res.data;
};
// Create post
export const createPost = async (post: Omit<postsTypes, 'id'>): Promise<postsTypes> => {
  const response = await axioshelper.post('/posts', post);
  return response.data;
};
// Update post
export const updatePost = async (post: postsTypes): Promise<postsTypes> => {
  const response = await axioshelper.put(`/posts/${post.id}`, post);
  return response.data;
};
// Delete post
export const deletePost = async (id: number): Promise<void> => {
  await axioshelper.delete(`/posts/${id}`);
};
