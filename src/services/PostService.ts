import http from '@/utils/http';
import { PostInterface } from '@/utils/types';

const all = async () => {
  const response = await http.get<PostInterface[]>('/posts?userId=1');
  return response.data;
};

const findById = async (id: any) => {
  const response = await http.get<PostInterface>(`/posts/${id}`);
  return response.data;
};

const findByTitle = async (title: string) => {
  const response = await http.get<PostInterface[]>(`/posts?title=${title}`);
  return response.data;
};

const create = async ({ title, body }: PostInterface) => {
  const response = await http.post<any>('/posts', { title, body });
  return response.data;
};

const update = async (id: any, { title, body }: PostInterface) => {
  const response = await http.put<any>(`/posts/${id}`, {
    title,
    body
  });
  return response.data;
};

const deleteById = async (id: any) => {
  const response = await http.delete<any>(`/posts/${id}`);
  return response.data;
};

const deleteAll = async () => {
  const response = await http.delete<any>('/posts');
  return response.data;
};

const PostService = {
  all,
  findById,
  findByTitle,
  create,
  update,
  deleteById,
  deleteAll
};

export default PostService;
