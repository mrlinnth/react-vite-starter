import ErrorAlert from '@/components/common/ErrorAlert';
import LoadingDots from '@/components/common/LoadingDots';
import LogInForm from '@/components/forms/LogInForm';
import useAllPosts from '@/hooks/useAllPosts';
import { tokenState } from '@/utils/atoms';
import { useRecoilValue } from 'recoil';

export default function Playground() {
  const token = useRecoilValue(tokenState);
  const { data, error, isFetching, isLoading } = useAllPosts();

  if (isLoading || isFetching) return <LoadingDots />;

  if (error) return <ErrorAlert />;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <LogInForm />
        <div className="card card-bordered bg-neutral text-primary-content">
          <div className="card-body">
            <p>Current token : {token}</p>
          </div>
        </div>
      </div>
      <div className="divider">
        Fetch /posts?userId=1 from JSONPlaceholder API
      </div>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((post) => (
          <div
            key={post.id}
            className="card card-bordered bg-neutral text-primary-content"
          >
            <div className="card-body">
              <h2 className="font-bold">Title: {post.title}</h2>
              <p>Body: {post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
