import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/marvel', { replace: true });
  };
  return (
    <>
      <div className="container form-control  mt-5">
        <h1 className="text-center">Login</h1>
        <form className=" d-flex flex-column justify-content-center align-content-center align-items-center">
          <input
            className="form-control mt-2"
            type="email"
            placeholder="Email"
            name="email"
          />
          <input
            className="form-control mt-2"
            type="password"
            placeholder="Password"
            name="password"
          />
          <Link className="btn btn-outline-info mt-2" to="/register">
            Without an account? register here
          </Link>
          <button
            type="button"
            className="btn btn-outline-primary mt-3 mb-2"
            onClick={onLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
