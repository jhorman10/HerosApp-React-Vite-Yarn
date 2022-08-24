import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const onRegister = () => {
    navigate('/marvel', { replace: true });
  };
  return (
    <>
      <div className="container form-control  mt-5">
        <h1 className="text-center">Register</h1>
        <form className="d-flex flex-column justify-content-center align-content-center align-items-center">
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
          <input
            className="form-control mt-2"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <button
            type="button"
            className="btn btn-outline-info mt-3 mb-3"
            onClick={onRegister}
          >
            Go!
          </button>
        </form>
      </div>
    </>
  );
};
