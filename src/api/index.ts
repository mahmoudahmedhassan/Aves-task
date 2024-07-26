import { postsTypes } from '../types';
import axioshelper from './axiosConfig';
 
export const fetchPosts = async (): Promise<postsTypes[]> => {
  const response = await axioshelper.get('/posts');
  return response.data;
};

export const createPost = async (post: Omit<postsTypes, 'id'>): Promise<postsTypes> => {
  const response = await axioshelper.post('/posts', post);
  return response.data;
};

export const updatePost = async (post: postsTypes): Promise<postsTypes> => {
  const response = await axioshelper.put(`/posts/${post.id}`, post);
  return response.data;
};
export const deletePost = async (id: number): Promise<void> => {
  await axioshelper.delete(`/posts/${id}`);
};
