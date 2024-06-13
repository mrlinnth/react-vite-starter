import { useParams } from 'react-router-dom';

export default function Profile() {
  const params = useParams();

  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hi, {params.name}</h1>
          <p className="py-6">You are successfully logged in!</p>
        </div>
      </div>
    </div>
  );
}
