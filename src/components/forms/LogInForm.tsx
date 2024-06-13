import { tokenState } from '@/utils/atoms';
import { generateToken } from '@/utils/helpers';
import { useSetRecoilState } from 'recoil';

export default function LogInForm() {
  const setToken = useSetRecoilState(tokenState);

  const handleLogin = () => {
    setToken(generateToken());
  };

  return (
    <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold sm:text-3xl">Log In</h1>
      <p>
        This is a dummy log in form. After submit, a dummy user and random token
        will be generated and stored in state.
      </p>
      <form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            defaultValue="user@mail.com"
            readOnly
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            defaultValue="password"
            readOnly
          />
        </label>

        <div className="flex items-center justify-between">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
