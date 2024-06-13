export default function RegisterForm() {
  return (
    <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold sm:text-3xl">Register</h1>
      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
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
          />
        </label>

        <div className="flex items-center justify-between">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
