import PostService from '@/services/PostService';
import { useQuery } from 'react-query';

export default function useAllPosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => await PostService.all()
  });
}
